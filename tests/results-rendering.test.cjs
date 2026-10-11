const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");

function makeHarness() {
  const root = path.join(__dirname, "..");
  const source = fs.readFileSync(path.join(root, "app.js"), "utf8");
  const elements = new Map();
  const drawnText = [];
  const downloads = [];
  const logs = [];
  const drawingContext = {
    fillRect() {}, strokeRect() {}, beginPath() {}, moveTo() {}, arcTo() {}, closePath() {}, fill() {},
    save() {}, restore() {}, clip() {}, arc() {}, stroke() {}, drawImage() {},
    createLinearGradient() { return { addColorStop() {} }; },
    fillText(value) { drawnText.push(String(value)); },
    measureText(value) { return { width: String(value).length * 10 }; },
  };
  class Element {
    constructor(tag = "div") { this.tagName = tag.toUpperCase(); this.classList = { toggle() {} }; this.handlers = {}; this.style = {}; this.disabled = false; this.hidden = false; }
    addEventListener(type, handler) { this.handlers[type] = handler; }
    setAttribute() {}
    focus() {}
    click() { downloads.push({ href: this.href, download: this.download }); }
    querySelector() { return new Element(); }
  }
  const document = {
    documentElement: { lang: "", setAttribute() {} },
    body: { classList: { toggle() {} } },
    fonts: { load: async () => [], ready: Promise.resolve() },
    querySelector(selector) {
      if (!elements.has(selector)) elements.set(selector, new Element());
      return elements.get(selector);
    },
    querySelectorAll() { return []; },
    createElement(tag) {
      const element = new Element(tag);
      if (tag === "canvas") {
        element.width = 0;
        element.height = 0;
        element.getContext = () => drawingContext;
        element.toDataURL = () => "data:image/jpeg;base64,/9j/";
      }
      return element;
    },
  };
  const context = vm.createContext({
    console: { error: (...args) => logs.push(args) },
    document,
    localStorage: { getItem: () => null, setItem() {} },
    window: { setTimeout() { return 0; } },
    URL: { createObjectURL: () => "blob:test-pdf", revokeObjectURL() {} },
    Blob,
    TextEncoder,
    atob,
    __drawnText: drawnText,
    __downloads: downloads,
    __logs: logs,
  });
  vm.runInContext(fs.readFileSync(path.join(root, "results-logic.js"), "utf8"), context);
  vm.runInContext(`${source}\n;globalThis.__testApi = {
    questionCounts: [questions.length, personalityQuestions.length, wellnessQuestions.length],
    setLanguage(value) { language = value; applyLanguage(); },
    setLoveAnswers(values) { answers.fill(null); values.forEach((value, index) => { answers[index] = value; }); userName = "Riley"; belovedName = "Sam"; screen = "question"; },
    renderLove() { renderResults(); return content.innerHTML; },
    async pdfLove() { const result = BulbuliResultLogic.calculateLoveResults(questions, answers, [...new Set(questions.map((question) => question.category))]); await downloadCertificate(result.score, result.score !== null); },
    renderPersonality(profiles) { userName = "Riley"; personalityProfiles = profiles; screen = "personality-question"; renderPersonalityResults(); return content.innerHTML; },
    async pdfPersonality() { userName = "Riley"; await downloadPersonalityCertificate(); },
    setHealthAnswers(values) { wellnessAnswers = values; userName = "Riley"; wellnessMode = true; screen = "wellness-question"; },
    renderHealth() { renderWellnessResults(); return content.innerHTML; },
    async pdfHealth() { await downloadWellnessCertificate(); },
    drawnText: __drawnText, downloads: __downloads, logs: __logs,
  };`, context);
  return context.__testApi;
}

test("result renderers preserve all 25 questions for every quiz", () => {
  assert.deepEqual(Array.from(makeHarness().questionCounts), [25, 25, 25]);
});

test("Love result omits ring and numeric score when no answers are given", () => {
  const app = makeHarness();
  app.setLoveAnswers(Array(25).fill(null));
  const html = app.renderLove();
  assert.match(html, /Not enough answers to calculate a score\./);
  assert.doesNotMatch(html, /score-ring/);
  assert.doesNotMatch(html, /score-number">0</);
  assert.equal((html.match(/category-value">—/g) || []).length, 5);
});

test("Love partial and complete results show scores, explanation, and categories", () => {
  const app = makeHarness();
  app.setLoveAnswers([5, ...Array(24).fill(null)]);
  const partial = app.renderLove();
  assert.match(partial, /score-number">100</);
  assert.match(partial, /average of answered choices \(1–5\), mapped to 0–100/);
  assert.match(partial, /category-value">100/);
  app.setLoveAnswers(Array(25).fill(3));
  const complete = app.renderLove();
  assert.match(complete, /score-number">50</);
  assert.equal((complete.match(/class="category-row"/g) || []).length, 5);
});

test("Love PDF reports insufficient answers instead of a score", async () => {
  const app = makeHarness();
  app.setLoveAnswers(Array(25).fill(null));
  await app.pdfLove();
  assert.ok(app.downloads.some((download) => download.download === "love-meter-Riley-Sam.pdf"));
  assert.ok(app.drawnText.includes("Not enough answers to calculate a score."));
  assert.ok(!app.drawnText.some((text) => /(?:^|\s)0%?$/.test(text)));
  assert.equal(app.logs.length, 0);
});

test("Personality renderer shows every tied trait, a unique leader, and an empty-answer state", () => {
  const app = makeHarness();
  const tied = app.renderPersonality([0, 1]);
  assert.match(tied, /Curiosity &amp; openness \+ Care &amp; empathy|Curiosity & openness \+ Care & empathy/);
  assert.match(tied, /share the highest average/);
  assert.match(tied, /trait average uses its answered choices/);
  const unique = app.renderPersonality([2]);
  assert.match(unique, /Social energy/);
  assert.doesNotMatch(unique, /share the highest average/);
  const empty = app.renderPersonality([]);
  assert.match(empty, /A personality profile awaits/);
  assert.doesNotMatch(empty, /trait average uses/);
});

test("Personality PDF and Health PDFs generate without errors, with bilingual Health disclaimers", async () => {
  const app = makeHarness();
  await app.pdfPersonality();
  assert.ok(app.downloads.some((download) => download.download === "personality-Riley.pdf"), JSON.stringify({ logs: app.logs, downloads: app.downloads }));
  assert.equal(app.logs.length, 0);

  for (const [language, expected] of [["en", "not validated fitness measurements"], ["bn", "ফিটনেসের যাচাইকৃত পরিমাপ নয়"]]) {
    app.setLanguage(language);
    app.setHealthAnswers(Array(25).fill(5));
    const html = app.renderHealth();
    assert.ok(html.includes(expected));
    assert.ok(html.includes(language === "en" ? "not a health score, diagnosis, or medical advice" : "স্বাস্থ্য স্কোর, রোগ নির্ণয় বা চিকিৎসা পরামর্শ নয়"));
    await app.pdfHealth();
    assert.ok(app.drawnText.some((text) => text.toLowerCase().includes(expected.toLowerCase())));
  }
  assert.equal(app.downloads.filter((download) => download.download === "wellness-Riley.pdf").length, 2);
  assert.equal(app.logs.length, 0);
});
