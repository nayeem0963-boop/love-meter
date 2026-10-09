const questions = [
  { category: "Emotional connection", text: "How comfortable do you feel being your full, unfiltered self around them?" },
  { category: "Emotional connection", text: "When something good happens, how much do you want to tell them first?" },
  { category: "Emotional connection", text: "How often do you feel truly understood by them?" },
  { category: "Emotional connection", text: "Can you talk about a vulnerable feeling with them without worrying they’ll judge you?" },
  { category: "Emotional connection", text: "After spending time together, how emotionally close do you usually feel?" },
  { category: "Care & support", text: "How much do they notice and remember the little things that matter to you?" },
  { category: "Care & support", text: "When you’re having a hard day, how supported do you feel by them?" },
  { category: "Care & support", text: "How reliably do their actions match the care they say they have for you?" },
  { category: "Care & support", text: "How comfortable are you asking them for help when you need it?" },
  { category: "Care & support", text: "Do you feel that effort and consideration flow both ways between you?" },
  { category: "Communication", text: "How easy is it for the two of you to talk openly and honestly?" },
  { category: "Communication", text: "When you disagree, how well can you listen to each other?" },
  { category: "Communication", text: "How confident are you that you can bring up a concern and be taken seriously?" },
  { category: "Communication", text: "After a misunderstanding, how well do you find your way back to each other?" },
  { category: "Communication", text: "How clear are you both about what you want from this connection?" },
  { category: "Joy & closeness", text: "How often do you laugh together or find ordinary moments fun?" },
  { category: "Joy & closeness", text: "How much do you enjoy simply spending time together, even without a plan?" },
  { category: "Joy & closeness", text: "How natural does affection or warmth between you feel?" },
  { category: "Joy & closeness", text: "How much can you relax and be playful around them?" },
  { category: "Joy & closeness", text: "How often do you find yourself looking forward to seeing or talking with them?" },
  { category: "Shared direction", text: "How much do your important values seem to line up?" },
  { category: "Shared direction", text: "How compatible do your hopes for the future feel?" },
  { category: "Shared direction", text: "How much do you respect the way they make choices and treat other people?" },
  { category: "Shared direction", text: "Can you keep your own interests and identity while growing closer to them?" },
  { category: "Shared direction", text: "When you picture building something meaningful together, how hopeful do you feel?" },
];

const choices = [
  { label: "Not at all", value: 1 },
  { label: "A little", value: 2 },
  { label: "Somewhat", value: 3 },
  { label: "Quite a bit", value: 4 },
  { label: "Very much", value: 5 },
];
const answers = Array(questions.length).fill(null);
const content = document.querySelector("#quiz-content");
const fill = document.querySelector("#progress-fill");
const stepLabel = document.querySelector("#step-label");
const progressLabel = document.querySelector("#progress-label");
let current = -1;
let userName = "";
let belovedName = "";

document.querySelector("#start-button").addEventListener("click", renderNameForm);

function renderNameForm() {
  stepLabel.textContent = "A LITTLE INTRODUCTION";
  progressLabel.textContent = "Before we begin";
  content.innerHTML = `
    <form class="name-form" id="name-form">
      <div class="big-heart" aria-hidden="true">♥</div>
      <h2>Who’s on your mind?</h2>
      <p>We’ll use these names to personalize your results and certificate.</p>
      <label for="your-name">Your name</label>
      <input id="your-name" name="yourName" maxlength="50" autocomplete="given-name" placeholder="e.g. Alex" required />
      <label for="beloved-name">Your beloved’s name</label>
      <input id="beloved-name" name="belovedName" maxlength="50" placeholder="e.g. Jamie" required />
      <button class="primary-button" type="submit">Continue to the questions <span>→</span></button>
    </form>`;
  document.querySelector("#name-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    userName = String(data.get("yourName")).trim();
    belovedName = String(data.get("belovedName")).trim();
    if (!userName || !belovedName) return;
    current = 0;
    renderQuestion();
  });
  document.querySelector("#your-name").focus();
}

function renderQuestion() {
  const question = questions[current];
  stepLabel.textContent = `QUESTION ${String(current + 1).padStart(2, "0")} / ${questions.length}`;
  progressLabel.textContent = `${Math.round((current / questions.length) * 100)}% complete`;
  fill.style.width = `${(current / questions.length) * 100}%`;
  content.innerHTML = `
    <div class="question-wrap">
      <span class="category">${question.category}</span>
      <h2 class="question">${question.text}</h2>
      <p class="hint">Thinking about your connection right now…</p>
      <div class="answers" role="group" aria-label="Choose how much this applies">
        ${choices.map((choice, index) => `<button class="answer" data-value="${choice.value}"><span class="answer-dot">${index + 1}</span>${choice.label}</button>`).join("")}
      </div>
      <div class="quiz-nav"><button class="text-button" id="back-button" ${current === 0 ? "disabled" : ""}>← Back</button><button class="text-button" id="skip-button">Skip question</button></div>
    </div>`;
  content.querySelectorAll(".answer").forEach((button) => button.addEventListener("click", () => choose(Number(button.dataset.value))));
  document.querySelector("#back-button").addEventListener("click", () => { if (current > 0) { current -= 1; renderQuestion(); } });
  document.querySelector("#skip-button").addEventListener("click", () => choose(null));
}

function choose(value) {
  answers[current] = value;
  if (current < questions.length - 1) { current += 1; renderQuestion(); }
  else renderResults();
}

function renderResults() {
  const answered = answers.filter((value) => value !== null);
  const score = answered.length ? Math.round(((answered.reduce((sum, value) => sum + value, 0) - answered.length) / (answered.length * 4)) * 100) : 0;
  const groups = [...new Set(questions.map((question) => question.category))];
  const categoryScores = groups.map((name) => {
    const values = questions.map((question, index) => question.category === name ? answers[index] : null).filter((value) => value !== null);
    return { name, score: values.length ? Math.round(((values.reduce((sum, value) => sum + value, 0) - values.length) / (values.length * 4)) * 100) : null };
  });
  let title, copy;
  if (!answered.length) { title = "A blank page, for now"; copy = "You skipped every question, so there isn’t enough to make a score. That’s okay—sometimes it takes a little time to know what you feel."; }
  else if (score >= 80) { title = "A connection with real warmth"; copy = "Your answers point to a lot of care, closeness, and shared ease. Enjoy what’s here, and keep making room for honest conversations as you grow."; }
  else if (score >= 60) { title = "A promising kind of closeness"; copy = "There are some lovely signs in your answers. Keep noticing how you feel together, and let steady actions and open conversations tell you more over time."; }
  else if (score >= 40) { title = "A connection still taking shape"; copy = "Your answers sound like a mix of bright spots and questions. You don’t need to force a conclusion—notice what feels good and what you may want to talk through."; }
  else { title = "Your heart may need a check-in"; copy = "Your answers suggest this connection may not be meeting some of your needs right now. Your feelings deserve care; consider what would help you feel respected, safe, and understood."; }

  stepLabel.textContent = "YOUR HEART CHECK";
  progressLabel.textContent = "Complete";
  fill.style.width = "100%";
  content.innerHTML = `
    <div class="results">
      <div class="score-ring" style="--score:${score}%"><div><div class="score-number">${score}</div><div class="score-caption">OUT OF 100</div></div></div>
      <p class="names-line">${escapeHtml(userName)} &nbsp; <span>♥</span> &nbsp; ${escapeHtml(belovedName)}</p>
      <h2>${title}</h2>
      <p class="result-copy">${copy}</p>
      <div class="category-scores">${categoryScores.map((item) => `<div class="category-row"><span>${item.name}</span><div class="mini-track"><div class="mini-fill" style="width:${item.score ?? 0}%"></div></div><span class="category-value">${item.score === null ? "—" : item.score}</span></div>`).join("")}</div>
      <div class="reflection"><strong>A gentle reflection</strong>${reflectionFor(categoryScores)}</div>
      <div class="results-actions"><button class="primary-button" id="certificate-button">Download certificate <span>↓</span></button><button class="secondary-button" id="again-button">Take it again <span>↻</span></button></div>
      <p class="disclaimer">This score is only a playful snapshot of your answers—not a measure of someone else’s feelings, a prediction, or a substitute for talking with each other.</p>
    </div>`;
  document.querySelector("#again-button").addEventListener("click", reset);
  document.querySelector("#certificate-button").addEventListener("click", () => downloadCertificate(score, answered.length > 0));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

async function downloadCertificate(score, hasScore) {
  const button = document.querySelector("#certificate-button");
  button.disabled = true;
  button.textContent = "Preparing certificate…";
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1131;
    const context = canvas.getContext("2d");
    context.fillStyle = "#fff8f5";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#e8b8bd";
    context.lineWidth = 4;
    context.strokeRect(42, 42, canvas.width - 84, canvas.height - 84);
    context.strokeStyle = "#f0d9d6";
    context.lineWidth = 2;
    context.strokeRect(61, 61, canvas.width - 122, canvas.height - 122);
    context.fillStyle = "#fbe8e5";
    context.beginPath(); context.arc(800, 293, 135, 0, Math.PI * 2); context.fill();
    context.textAlign = "center";
    context.fillStyle = "#d85570";
    context.font = "700 58px 'DM Sans', sans-serif";
    context.fillText("♥", 800, 315);
    context.fillStyle = "#9c5966";
    context.font = "700 24px 'DM Sans', sans-serif";
    context.letterSpacing = "7px";
    context.fillText("A LITTLE LOVE METER CERTIFICATE", 800, 474);
    context.letterSpacing = "0px";
    context.fillStyle = "#392b30";
    context.font = "600 76px 'Playfair Display', Georgia, serif";
    context.fillText("A sweet connection", 800, 581);
    context.fillStyle = "#887b7e";
    context.font = "400 28px 'DM Sans', sans-serif";
    context.fillText("celebrated between", 800, 644);
    context.fillStyle = "#b43d58";
    context.font = "600 54px 'Playfair Display', Georgia, serif";
    context.fillText(`${userName}  ♥  ${belovedName}`, 800, 724, 1360);
    context.fillStyle = "#d85570";
    context.font = "700 92px 'DM Sans', sans-serif";
    context.fillText(hasScore ? `${score}%` : "♡", 800, 856);
    context.fillStyle = "#887b7e";
    context.font = "500 22px 'DM Sans', sans-serif";
    context.fillText(hasScore ? "YOUR PLAYFUL LOVE SCORE" : "A HEARTFELT CHECK-IN", 800, 898);
    context.fillStyle = "#9a8b8e";
    context.font = "400 20px 'DM Sans', sans-serif";
    context.fillText(`Created ${new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date())} · Just for fun`, 800, 1010);
    context.font = "400 16px 'DM Sans', sans-serif";
    context.fillText("A reflection of one person’s answers, not a measure of someone else’s feelings.", 800, 1052);

    const jpeg = dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.94));
    const pdf = makeImagePdf(jpeg, canvas.width, canvas.height);
    const url = URL.createObjectURL(pdf);
    const link = document.createElement("a");
    link.href = url;
    link.download = `love-meter-${safeFilename(userName)}-${safeFilename(belovedName)}.pdf`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    console.error("Could not create the certificate PDF", error);
    button.textContent = "Couldn’t create PDF — try again";
    button.disabled = false;
    return;
  }
  button.textContent = "Certificate downloaded ✓";
  window.setTimeout(() => { button.innerHTML = 'Download certificate <span>↓</span>'; button.disabled = false; }, 2500);
}

function dataUrlToBytes(dataUrl) {
  const binary = atob(dataUrl.split(",")[1]);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function makeImagePdf(imageBytes, width, height) {
  const encoder = new TextEncoder();
  const chunks = [];
  let length = 0;
  const push = (chunk) => { chunks.push(chunk); length += chunk.length; };
  const addText = (text) => push(encoder.encode(text));
  const offsets = [0];
  addText("%PDF-1.4\n%LoveMeter\n");
  const addObject = (number, parts) => {
    offsets[number] = length;
    addText(`${number} 0 obj\n`);
    parts.forEach((part) => typeof part === "string" ? addText(part) : push(part));
    addText("\nendobj\n");
  };
  addObject(1, ["<< /Type /Catalog /Pages 2 0 R >>"]);
  addObject(2, ["<< /Type /Pages /Kids [3 0 R] /Count 1 >>"]);
  addObject(3, ["<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /XObject << /Im0 5 0 R >> >> /Contents 4 0 R >>"]);
  const stream = "q\n842 0 0 595 0 0 cm\n/Im0 Do\nQ\n";
  addObject(4, [`<< /Length ${encoder.encode(stream).length} >>\nstream\n${stream}endstream`]);
  addObject(5, [`<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageBytes.length} >>\nstream\n`, imageBytes, "\nendstream"]);
  const xrefOffset = length;
  addText(`xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);
  return new Blob(chunks, { type: "application/pdf" });
}

function safeFilename(value) {
  return value.normalize("NFKD").replace(/[^\w-]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "love";
}

function reflectionFor(scores) {
  const complete = scores.filter((item) => item.score !== null);
  if (!complete.length) return "If you want, come back when you feel ready and answer only what feels comfortable.";
  const strongest = [...complete].sort((a, b) => b.score - a.score)[0];
  const weakest = [...complete].sort((a, b) => a.score - b.score)[0];
  if (strongest.score - weakest.score < 10) return `Your answers feel fairly even across the board. Ask yourself which moments with them leave you feeling most like yourself.`;
  if (weakest.score < 50) return `There’s a difference between ${strongest.name.toLowerCase()} and ${weakest.name.toLowerCase()} in your answers. What would help the lower-scoring part feel more cared for?`;
  return `${strongest.name} stands out as a bright spot. What small moment best captures that feeling for you?`;
}

function reset() {
  answers.fill(null);
  current = -1;
  userName = "";
  belovedName = "";
  stepLabel.textContent = "YOUR QUESTIONS";
  progressLabel.textContent = "Ready when you are";
  fill.style.width = "0";
  content.innerHTML = `<div class="start-state"><div class="big-heart" aria-hidden="true">♥</div><h2>A moment to think about them.</h2><p>There are no right answers. Go with what feels true for you today.</p><button class="primary-button" id="start-button">Start the questions <span>→</span></button></div>`;
  document.querySelector("#start-button").addEventListener("click", renderNameForm);
}
