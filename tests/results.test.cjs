const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const resultLogic = require("../results-logic.js");

test("Love Meter omits the score and category values when every answer is skipped", () => {
  const questions = [
    { category: "A" }, { category: "A" }, { category: "B" },
  ];
  const result = resultLogic.calculateLoveResults(questions, [null, null, null], ["A", "B"]);
  assert.equal(result.answerCount, 0);
  assert.equal(result.score, null);
  assert.deepEqual(result.categoryScores.map(({ score }) => score), [null, null]);
});

test("Love Meter normalizes partial answers and leaves unanswered categories blank", () => {
  const questions = [
    { category: "A" }, { category: "A" }, { category: "B" }, { category: "B" },
  ];
  const result = resultLogic.calculateLoveResults(questions, [5, null, 3, null], ["A", "B"]);
  assert.equal(result.answerCount, 2);
  assert.equal(result.score, 75);
  assert.deepEqual(result.categoryScores.map(({ score }) => score), [100, 50]);
  const unanswered = resultLogic.calculateLoveResults(questions, [null, 4, null, null], ["A", "B"]);
  assert.equal(unanswered.score, 75);
  assert.deepEqual(unanswered.categoryScores.map(({ score }) => score), [75, null]);
});

test("Love Meter fully answered endpoints retain the existing 0–100 scale", () => {
  assert.equal(resultLogic.normalizedMean(Array(25).fill(1)), 0);
  assert.equal(resultLogic.normalizedMean(Array(25).fill(5)), 100);
});

test("Health category averages exclude skipped questions and retain the 1–5 scale", () => {
  const questions = [
    { category: 0 }, { category: 0 }, { category: 1 }, { category: 1 },
  ];
  const averages = resultLogic.calculateCategoryAverages(questions, [5, null, 3, null], [0, 1]);
  assert.deepEqual(averages, [{ category: 0, average: 5 }, { category: 1, average: 3 }]);
  assert.deepEqual(resultLogic.calculateCategoryAverages(questions, Array(4).fill(null), [0, 1]), [
    { category: 0, average: null }, { category: 1, average: null },
  ]);
});

test("Personality returns every tied highest trait and does not choose by position", () => {
  const questions = [0, 0, 1, 1, 2, 2].map((trait) => ({ trait }));
  assert.deepEqual(resultLogic.calculatePersonalityLeaders(questions, [5, 1, 3, 3, null, null], [0, 1, 2]), [0, 1]);
  assert.deepEqual(resultLogic.calculatePersonalityLeaders(questions, [5, 5, 3, 3, 4, 4], [0, 1, 2]), [0]);
  assert.deepEqual(resultLogic.calculatePersonalityLeaders(questions, Array(6).fill(null), [0, 1, 2]), []);
});

test("Health categories retain existing cutoffs and handle no answers", () => {
  const labels = { insufficient: "Not enough answers", categories: ["Athletic", "Very fit", "Healthy", "Moderately fit", "Needs improvement"] };
  assert.equal(resultLogic.calculateWellnessCategory([], labels), "Not enough answers");
  assert.equal(resultLogic.calculateWellnessCategory(Array(25).fill(5), labels), "Athletic");
  assert.equal(resultLogic.calculateWellnessCategory(Array(25).fill(4), labels), "Very fit");
  assert.equal(resultLogic.calculateWellnessCategory(Array(25).fill(3), labels), "Moderately fit");
  assert.equal(resultLogic.calculateWellnessCategory(Array(25).fill(1), labels), "Needs improvement");
});

test("English and Bengali Health results and PDF copy disclaim clinical assessment", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");
  assert.match(source, /healthScoreExplanation:[^\n]*Labels such as Athletic are playful self-reflections, not validated fitness measurements\./);
  assert.match(source, /healthScoreExplanation:[^\n]*অ্যাথলেটিকের মতো শ্রেণি কেবল মজার স্ব-প্রতিফলন; এগুলো ফিটনেসের যাচাইকৃত পরিমাপ নয়/);
  assert.match(source, /wellnessDisclaimer:[^\n]*This is not a health score, diagnosis, or medical advice/);
  assert.match(source, /wellnessDisclaimer:[^\n]*এটি স্বাস্থ্য স্কোর, রোগ নির্ণয় বা চিকিৎসা পরামর্শ নয়/);
});
