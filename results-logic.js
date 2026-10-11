(function exposeBulbuliResultLogic(root) {
  function validAnswers(values) {
    return values.filter((value) => Number.isInteger(value) && value >= 1 && value <= 5);
  }

  function normalizedMean(values) {
    const answered = validAnswers(values);
    if (!answered.length) return null;
    return Math.round(((answered.reduce((sum, value) => sum + value, 0) - answered.length) / (answered.length * 4)) * 100);
  }

  function calculateLoveResults(questions, answers, categories) {
    const answered = validAnswers(answers);
    const categoryScores = categories.map((category) => {
      const values = questions.map((question, index) => question.category === category ? answers[index] : null);
      return { name: category, score: normalizedMean(values) };
    });
    return { answerCount: answered.length, score: normalizedMean(answers), categoryScores };
  }

  function calculateCategoryAverages(questions, answers, categories) {
    return categories.map((category) => {
      const values = questions
        .map((question, index) => question.category === category ? answers[index] : null)
        .filter((value) => Number.isInteger(value) && value >= 1 && value <= 5);
      return { category, average: values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null };
    });
  }

  function calculatePersonalityLeaders(questions, answers, traits) {
    const averages = traits.map((_, trait) => {
      const values = questions
        .map((question, index) => question.trait === trait ? answers[index] : null)
        .filter((value) => Number.isInteger(value) && value >= 1 && value <= 5);
      return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
    });
    const highest = Math.max(...averages.filter((average) => average !== null), 0);
    if (highest === 0) return [];
    return averages.reduce((leaders, average, index) => {
      if (average !== null && Math.abs(average - highest) < 1e-9) leaders.push(index);
      return leaders;
    }, []);
  }

  function calculateWellnessCategory(answers, labels) {
    const answered = validAnswers(answers);
    if (!answered.length) return labels.insufficient;
    const average = answered.reduce((sum, value) => sum + value, 0) / answered.length;
    const index = average >= 4.5 ? 0 : average >= 3.8 ? 1 : average >= 3.1 ? 2 : average >= 2.4 ? 3 : 4;
    return labels.categories[index];
  }

  root.BulbuliResultLogic = {
    validAnswers,
    normalizedMean,
    calculateLoveResults,
    calculateCategoryAverages,
    calculatePersonalityLeaders,
    calculateWellnessCategory,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = root.BulbuliResultLogic;
})(globalThis);
