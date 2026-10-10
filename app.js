const questions = [
  { category: "Emotional connection", text: "How comfortable do you feel being your full, unfiltered self around him/her?" },
  { category: "Emotional connection", text: "When something good happens, how much do you want to tell him/her first?" },
  { category: "Emotional connection", text: "How often do you feel truly understood by him/her?" },
  { category: "Emotional connection", text: "Can you talk about a vulnerable feeling with him/her without worrying he/she will judge you?" },
  { category: "Emotional connection", text: "After spending time together, how emotionally close do you usually feel?" },
  { category: "Care & support", text: "How much does he/she notice and remember the little things that matter to you?" },
  { category: "Care & support", text: "When you’re having a hard day, how supported do you feel by him/her?" },
  { category: "Care & support", text: "How reliably do his/her actions match the care he/she says he/she has for you?" },
  { category: "Care & support", text: "How comfortable are you asking him/her for help when you need it?" },
  { category: "Care & support", text: "Do you feel that effort and consideration flow both ways between you?" },
  { category: "Communication", text: "How easy is it for the two of you to talk openly and honestly?" },
  { category: "Communication", text: "When you disagree, how well can you listen to each other?" },
  { category: "Communication", text: "How confident are you that you can bring up a concern and he/she will take it seriously?" },
  { category: "Communication", text: "After a misunderstanding, how well do you find your way back to each other?" },
  { category: "Communication", text: "How clear are you both about what you want from this connection?" },
  { category: "Joy & closeness", text: "How often do you laugh together or find ordinary moments fun?" },
  { category: "Joy & closeness", text: "How much do you enjoy simply spending time together, even without a plan?" },
  { category: "Joy & closeness", text: "How natural does affection or warmth between you feel?" },
  { category: "Joy & closeness", text: "How much can you relax and be playful around him/her?" },
  { category: "Joy & closeness", text: "How often do you find yourself looking forward to seeing or talking with him/her?" },
  { category: "Shared direction", text: "How much do your important values seem to line up?" },
  { category: "Shared direction", text: "How compatible do your hopes for the future feel?" },
  { category: "Shared direction", text: "How much do you respect the way he/she makes choices and treats other people?" },
  { category: "Shared direction", text: "Can you keep your own interests and identity while growing closer to him/her?" },
  { category: "Shared direction", text: "When you picture building something meaningful together, how hopeful do you feel?" },
];

const banglaQuestions = [
  "তার সামনে নিজের সম্পূর্ণ ও অকৃত্রিম রূপে থাকতে আপনি কতটা স্বচ্ছন্দ বোধ করেন?",
  "আপনার কোনো ভালো ঘটনা ঘটলে, সবার আগে তাকে জানাতে আপনার কতটা ইচ্ছে করে?",
  "তার কাছে আপনি কতবার সত্যিই বোঝা অনুভব করেন?",
  "সে আপনাকে বিচার করবে—এই ভয় ছাড়াই কি তার সঙ্গে নিজের দুর্বল অনুভূতি নিয়ে কথা বলতে পারেন?",
  "একসঙ্গে সময় কাটানোর পর সাধারণত তার সঙ্গে কতটা আবেগের ঘনিষ্ঠতা অনুভব করেন?",
  "আপনার কাছে গুরুত্বপূর্ণ ছোট ছোট বিষয় সে কতটা খেয়াল রাখে ও মনে রাখে?",
  "আপনার দিন খারাপ গেলে, তার কাছ থেকে কতটা সহায়তা পান বলে মনে হয়?",
  "আপনার প্রতি তার যত্নের কথার সঙ্গে তার কাজ কতটা মেলে?",
  "প্রয়োজনে তার কাছে সাহায্য চাইতে আপনি কতটা স্বচ্ছন্দ?",
  "আপনাদের মধ্যে চেষ্টা ও বিবেচনা কি দুদিক থেকেই আসে বলে মনে হয়?",
  "আপনাদের দুজনের খোলামেলা ও সৎভাবে কথা বলা কতটা সহজ?",
  "মতভেদ হলে, আপনারা একে অপরের কথা কতটা মন দিয়ে শুনতে পারেন?",
  "কোনো উদ্বেগের কথা বললে সে গুরুত্ব দিয়ে নেবে—এ বিষয়ে আপনি কতটা নিশ্চিত?",
  "ভুল বোঝাবুঝির পর আপনারা কতটা ভালোভাবে আবার কাছাকাছি আসতে পারেন?",
  "এই সম্পর্ক থেকে আপনারা কী চান, সে বিষয়ে দুজনের বোঝাপড়া কতটা পরিষ্কার?",
  "আপনারা কতবার একসঙ্গে হাসেন বা সাধারণ মুহূর্তেও আনন্দ খুঁজে পান?",
  "কোনো পরিকল্পনা না থাকলেও তার সঙ্গে সময় কাটাতে আপনার কতটা ভালো লাগে?",
  "আপনাদের মধ্যে স্নেহ ও আন্তরিকতা কতটা স্বাভাবিক মনে হয়?",
  "তার পাশে আপনি কতটা নিশ্চিন্তে স্বচ্ছন্দ ও হাসিখুশি থাকতে পারেন?",
  "তার সঙ্গে দেখা বা কথা বলার অপেক্ষায় আপনি কতবার থাকেন?",
  "আপনাদের গুরুত্বপূর্ণ মূল্যবোধগুলো কতটা মেলে বলে মনে হয়?",
  "ভবিষ্যৎ নিয়ে আপনাদের আশা-আকাঙ্ক্ষা কতটা সামঞ্জস্যপূর্ণ?",
  "সে যেভাবে সিদ্ধান্ত নেয় এবং অন্যদের সঙ্গে আচরণ করে, তা আপনি কতটা সম্মান করেন?",
  "তার সঙ্গে ঘনিষ্ঠ হওয়ার পাশাপাশি নিজের আগ্রহ ও স্বকীয়তা বজায় রাখতে পারেন কি?",
  "একসঙ্গে অর্থপূর্ণ কিছু গড়ে তোলার কথা ভাবলে আপনার কতটা আশাবাদী লাগে?",
];

const translations = {
    en: {
    topNote: "A little heart check-in", eyebrow: "MADE FOR CURIOSITY, NOT CERTAINTY", introTitle: "How strong is<br /><em>your connection?</em>", introCopy: "Answer 25 thoughtful questions about someone on your mind. We’ll turn your answers into a playful love score and a few things to reflect on.", metaQuestions: "♡ &nbsp;25 questions", metaTime: "◷ &nbsp;About 3 minutes", metaFun: "✦ &nbsp;Just for fun", startTitle: "A moment to think about someone special.", startCopy: "There are no right answers. Go with what feels true for you today.", startButton: "Start the questions", footerMade: "Made with a little curiosity <b>♥</b>", footerPrivate: "Your answers stay on this device", ready: "Ready when you are", questionLabel: "QUESTION", complete: "Complete", nameIntro: "A LITTLE INTRODUCTION", beforeBegin: "Before we begin", nameTitle: "Who’s on your mind?", nameCopy: "We’ll use these names to personalize your results and certificate.", yourName: "Your name", belovedName: "Your beloved’s name", yourPlaceholder: "e.g. Alex", belovedPlaceholder: "e.g. Jamie", continue: "Continue to the questions", hint: "Thinking about your connection right now…", answerGroup: "Choose how much this applies", back: "← Back", skip: "Skip question", heartCheck: "YOUR HEART CHECK", outOf: "OUT OF 100", noAnswersTitle: "A blank page, for now", noAnswersCopy: "You skipped every question, so there isn’t enough to make a score. That’s okay—sometimes it takes a little time to know what you feel.", highTitle: "A connection with real warmth", highCopy: "Your answers point to a lot of care, closeness, and shared ease. Enjoy what’s here, and keep making room for honest conversations as you grow.", goodTitle: "A promising kind of closeness", goodCopy: "There are some lovely signs in your answers. Keep noticing how you feel together, and let steady actions and open conversations tell you more over time.", midTitle: "A connection still taking shape", midCopy: "Your answers sound like a mix of bright spots and questions. You don’t need to force a conclusion—notice what feels good and what you may want to talk through.", lowTitle: "Your heart may need a check-in", lowCopy: "Your answers suggest this connection may not be meeting some of your needs right now. Your feelings deserve care; consider what would help you feel respected, safe, and understood.", reflectionTitle: "A gentle reflection", reflectionBlank: "If you want, come back when you feel ready and answer only what feels comfortable.", reflectionEven: "Your answers feel fairly even across the board. Ask yourself which moments with {name} leave you feeling most like yourself.", reflectionLow: "There’s a difference between {strong} and {weak} in your answers. What would help the lower-scoring part feel more cared for?", reflectionHigh: "{strong} stands out as a bright spot. What small moment best captures that feeling for you?", certificate: "Download certificate", preparing: "Preparing certificate…", downloaded: "Certificate downloaded ✓", pdfFailed: "Couldn’t create PDF — try again", retake: "Take it again", disclaimer: "This score is only a playful snapshot of your answers—not a measure of someone else’s feelings, a prediction, or a substitute for talking with each other.", justForFun: "Just for fun", certEyebrow: "A tiny love certificate", certTitle: "A sweet connection", certBetween: "celebrated between", certScore: "YOUR PLAYFUL LOVE SCORE", certBlank: "A HEARTFELT CHECK-IN", certDisclaimer: "A reflection of one person’s answers, not a measure of someone else’s feelings.", categories: ["Emotional connection", "Care & support", "Communication", "Joy & closeness", "Shared direction"], choices: ["Not at all", "A little", "Somewhat", "Quite a bit", "Very much"], toggle: "বাংলা", languageName: "English",
  },
  bn: {
    topNote: "ভালোবাসার ছোট্ট খোঁজখবর", eyebrow: "কৌতূহলের জন্য, নিশ্চিত সিদ্ধান্তের জন্য নয়", introTitle: "আপনাদের সম্পর্কের<br /><em>বন্ধন কতটা গভীর?</em>", introCopy: "মনে থাকা মানুষটিকে নিয়ে ২৫টি ভাবনাপূর্ণ প্রশ্নের উত্তর দিন। আপনার উত্তর থেকে তৈরি হবে একটি মজার ভালোবাসার স্কোর ও কিছু ভাবনার খোরাক।", metaQuestions: "♡ &nbsp;২৫টি প্রশ্ন", metaTime: "◷ &nbsp;প্রায় ৩ মিনিট", metaFun: "✦ &nbsp;শুধুই মজার জন্য", startTitle: "বিশেষ মানুষটির কথা একটু ভাবুন।", startCopy: "এখানে সঠিক বা ভুল উত্তর নেই। আজ আপনার কাছে যেটা সত্যি মনে হয়, সেটাই বেছে নিন।", startButton: "প্রশ্ন শুরু করুন", footerMade: "একটু কৌতূহল নিয়ে তৈরি <b>♥</b>", footerPrivate: "আপনার উত্তর এই ডিভাইসেই থাকে", ready: "শুরু করতে প্রস্তুত?", questionLabel: "প্রশ্ন", complete: "সম্পন্ন", nameIntro: "আপনাদের পরিচয়", beforeBegin: "শুরু করার আগে", nameTitle: "কার কথা ভাবছেন?", nameCopy: "ফলাফল ও সার্টিফিকেটে এই নামগুলো ব্যবহার করা হবে।", yourName: "আপনার নাম", belovedName: "প্রিয় মানুষটির নাম", yourPlaceholder: "যেমন: রিয়া", belovedPlaceholder: "যেমন: আরিফ", continue: "প্রশ্নে এগিয়ে যান", hint: "এই মুহূর্তে আপনাদের সম্পর্কের কথা ভাবুন…", answerGroup: "এটি আপনার ক্ষেত্রে কতটা প্রযোজ্য, বেছে নিন", back: "← পেছনে", skip: "প্রশ্ন এড়িয়ে যান", heartCheck: "আপনাদের ভালোবাসার খোঁজখবর", outOf: "১০০-এর মধ্যে", noAnswersTitle: "এখনও ফাঁকা পাতা", noAnswersCopy: "আপনি কোনো প্রশ্নের উত্তর দেননি, তাই স্কোর তৈরি করা যায়নি। সমস্যা নেই—নিজের অনুভূতি বুঝতে কখনো একটু সময় লাগে।", highTitle: "উষ্ণতায় ভরা এক সম্পর্ক", highCopy: "আপনার উত্তরগুলোতে যত্ন, ঘনিষ্ঠতা ও একসঙ্গে স্বচ্ছন্দ থাকার অনেক ইঙ্গিত আছে। এই সুন্দর অনুভূতিগুলো উপভোগ করুন, আর সম্পর্ক এগোনোর সঙ্গে খোলামেলা কথার জায়গাও রাখুন।", goodTitle: "ঘনিষ্ঠতার সুন্দর সম্ভাবনা", goodCopy: "আপনার উত্তরে বেশ কিছু সুন্দর ইঙ্গিত আছে। একসঙ্গে থাকলে কেমন অনুভব করেন তা খেয়াল করুন; সময়ের সঙ্গে ধারাবাহিক কাজ ও খোলামেলা কথাবার্তা আপনাকে আরও বুঝতে সাহায্য করবে।", midTitle: "গড়ে উঠছে এমন এক সম্পর্ক", midCopy: "আপনার উত্তরে ভালো লাগার মুহূর্তের পাশাপাশি কিছু প্রশ্নও আছে। এখনই সিদ্ধান্তে পৌঁছানোর দরকার নেই—কী ভালো লাগে আর কোন বিষয় নিয়ে কথা বলতে চান, তা খেয়াল করুন।", lowTitle: "মনের অনুভূতিগুলো একটু খেয়াল করুন", lowCopy: "আপনার উত্তর ইঙ্গিত দিচ্ছে, এই সম্পর্কটি হয়তো এখন আপনার কিছু প্রয়োজন পূরণ করছে না। আপনার অনুভূতির যত্ন প্রাপ্য; কী করলে আপনি সম্মানিত, নিরাপদ ও বোঝা বোধ করবেন, তা ভাবুন।", reflectionTitle: "একটু ভেবে দেখুন", reflectionBlank: "ইচ্ছে হলে, প্রস্তুত বোধ করলে ফিরে এসে যতটুকু স্বচ্ছন্দ লাগে ততটুকুর উত্তর দিন।", reflectionEven: "বিভিন্ন দিক নিয়ে আপনার উত্তরগুলো প্রায় সমান। {name}-এর সঙ্গে কোন মুহূর্তগুলোতে নিজেকে সবচেয়ে স্বাভাবিক মনে হয়, তা ভাবুন।", reflectionLow: "আপনার উত্তরে {strong} ও {weak}-এর মধ্যে পার্থক্য আছে। কম স্কোর পাওয়া দিকটিতে আরও যত্ন পেতে কী সহায়তা করতে পারে?", reflectionHigh: "{strong} আপনার উত্তরে বিশেষভাবে উজ্জ্বল। কোন ছোট্ট মুহূর্তে এই অনুভূতিটা সবচেয়ে ভালো ধরা পড়ে?", certificate: "সার্টিফিকেট ডাউনলোড", preparing: "সার্টিফিকেট তৈরি হচ্ছে…", downloaded: "সার্টিফিকেট ডাউনলোড হয়েছে ✓", pdfFailed: "PDF তৈরি হয়নি — আবার চেষ্টা করুন", retake: "আবার করুন", disclaimer: "এই স্কোরটি শুধু আপনার উত্তরের একটি মজার প্রতিফলন—অন্য ব্যক্তির অনুভূতির মাপ, ভবিষ্যদ্বাণী বা একে অপরের সঙ্গে কথা বলার বিকল্প নয়।", justForFun: "শুধুই মজার জন্য", certEyebrow: "ভালোবাসার ছোট্ট সনদ", certTitle: "মিষ্টি এক সম্পর্ক", certBetween: "যাদের মাঝে উদযাপিত", certScore: "আপনাদের মজার ভালোবাসার স্কোর", certBlank: "মনের অনুভূতির ছোট্ট খোঁজখবর", certDisclaimer: "একজনের উত্তরের প্রতিফলন, অন্য কারও অনুভূতির মাপ নয়।", categories: ["আবেগের বন্ধন", "যত্ন ও সহায়তা", "যোগাযোগ", "আনন্দ ও ঘনিষ্ঠতা", "একসঙ্গে পথচলা"], choices: ["একদমই না", "একটু", "মোটামুটি", "বেশ খানিকটা", "অনেকটাই"], toggle: "English", languageName: "বাংলা",
  },
};

translations.en.startButton = "Love Meter Quiz";
translations.bn.startButton = "লাভ মিটার কুইজ";

const languageCategories = {
  en: translations.en.categories,
  bn: translations.bn.categories,
};
const categoryNames = ["Emotional connection", "Care & support", "Communication", "Joy & closeness", "Shared direction"];
const photoCopy = {
  en: { choose: "Add a photo (optional)", couple: "Add a couple photo (optional)", change: "Change photo", error: "Choose a JPG, PNG, or WebP image under 8 MB." },
  bn: { choose: "ছবি যোগ করুন (ঐচ্ছিক)", couple: "জুটির ছবি যোগ করুন (ঐচ্ছিক)", change: "ছবি বদলান", error: "৮ MB-এর কম JPG, PNG বা WebP ছবি বেছে নিন।" },
};
const t = (key) => translations[language][key];
function formatNumber(value) { return Number(value).toLocaleString(language === "bn" ? "bn-BD" : "en-US"); }
function localizeCategory(category) { return languageCategories[language][categoryNames.indexOf(category)] || category; }

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
const photos = { user: null, beloved: null, couple: null };
let language = "en";
let screen = "start";
let personalityMode = false;
let personalityAnswers = [];
let personalityProfile = null;
const personalityTraits = ["curious", "caring", "social", "steady", "confident"];
const personalityQuestions = [
  { en: "How eager are you to explore unfamiliar places or ideas?", bn: "অচেনা জায়গা বা নতুন ধারণা খুঁজে দেখতে আপনি কতটা আগ্রহী?", trait: 0 },
  { en: "How often do you seek out new experiences?", bn: "আপনি কতবার নতুন অভিজ্ঞতার খোঁজ করেন?", trait: 0 },
  { en: "How interested are you in understanding different points of view?", bn: "ভিন্ন দৃষ্টিভঙ্গি বুঝতে আপনি কতটা আগ্রহী?", trait: 0 },
  { en: "How readily do you try a creative or unusual approach?", bn: "সৃজনশীল বা ব্যতিক্রমী উপায় চেষ্টা করতে আপনি কতটা প্রস্তুত?", trait: 0 },
  { en: "How much do you enjoy learning just for the joy of discovery?", bn: "শুধু নতুন কিছু জানার আনন্দে শিখতে আপনার কতটা ভালো লাগে?", trait: 0 },
  { en: "How well do you notice when someone is feeling left out?", bn: "কেউ একা বা বাদ পড়েছে—এটা আপনি কতটা খেয়াল করেন?", trait: 1 },
  { en: "How willing are you to listen when someone needs to talk?", bn: "কারও কথা বলার প্রয়োজন হলে আপনি কতটা মন দিয়ে শোনেন?", trait: 1 },
  { en: "How thoughtful are you about remembering small things that matter to others?", bn: "অন্যের কাছে গুরুত্বপূর্ণ ছোট বিষয় মনে রাখতে আপনি কতটা যত্নশীল?", trait: 1 },
  { en: "How naturally do you offer help without being asked?", bn: "না বললেও সাহায্যের হাত বাড়াতে আপনি কতটা স্বতঃস্ফূর্ত?", trait: 1 },
  { en: "How carefully do you consider how your words may affect someone?", bn: "আপনার কথায় অন্যের কেমন লাগতে পারে, তা আপনি কতটা ভেবে দেখেন?", trait: 1 },
  { en: "How much do you enjoy meeting and getting to know new people?", bn: "নতুন মানুষের সঙ্গে পরিচিত হতে আপনার কতটা ভালো লাগে?", trait: 2 },
  { en: "How energized do you feel after a lively group gathering?", bn: "প্রাণবন্ত আড্ডার পর আপনি কতটা চনমনে বোধ করেন?", trait: 2 },
  { en: "How often do you start conversations in a group?", bn: "দলে আপনি কতবার নিজে থেকে কথা শুরু করেন?", trait: 2 },
  { en: "How comfortable are you sharing your ideas with others?", bn: "অন্যদের সঙ্গে নিজের ভাবনা ভাগ করতে আপনি কতটা স্বচ্ছন্দ?", trait: 2 },
  { en: "How often do you bring people together for shared plans?", bn: "একসঙ্গে কিছু করার পরিকল্পনায় আপনি কতবার সবাইকে জড়ো করেন?", trait: 2 },
  { en: "How reliably do you follow through on a promise?", bn: "কথা দিলে আপনি কতটা নির্ভরযোগ্যভাবে তা রাখেন?", trait: 3 },
  { en: "How calmly do you handle an unexpected change of plan?", bn: "হঠাৎ পরিকল্পনা বদলে গেলে আপনি কতটা শান্তভাবে সামলান?", trait: 3 },
  { en: "How well do you keep track of responsibilities and details?", bn: "দায়িত্ব ও খুঁটিনাটি মনে রাখতে আপনি কতটা ভালো?", trait: 3 },
  { en: "How patient are you when progress takes time?", bn: "কোনো কাজে সময় লাগলে আপনি কতটা ধৈর্য ধরেন?", trait: 3 },
  { en: "How steady are you when others are feeling stressed?", bn: "অন্যরা চাপে থাকলে আপনি কতটা স্থির থাকতে পারেন?", trait: 3 },
  { en: "How comfortable are you making a choice without needing everyone’s approval?", bn: "সবার অনুমোদন ছাড়াই সিদ্ধান্ত নিতে আপনি কতটা স্বচ্ছন্দ?", trait: 4 },
  { en: "How readily do you speak up about what you believe?", bn: "নিজের বিশ্বাসের কথা বলতে আপনি কতটা প্রস্তুত?", trait: 4 },
  { en: "How well do you recover after a disappointment?", bn: "হতাশার পর আপনি কতটা ভালোভাবে ঘুরে দাঁড়ান?", trait: 4 },
  { en: "How willing are you to take a sensible risk for something important?", bn: "গুরুত্বপূর্ণ কিছুর জন্য ভেবেচিন্তে ঝুঁকি নিতে আপনি কতটা রাজি?", trait: 4 },
  { en: "How much do you trust your ability to work through a challenge?", bn: "কঠিন পরিস্থিতি সামলানোর নিজের ক্ষমতায় আপনি কতটা ভরসা রাখেন?", trait: 4 },
];
const personalityOptions = {
  en: ["Curiosity & openness", "Care & empathy", "Social energy", "Steadiness", "Confidence & resilience"],
  bn: ["কৌতূহল ও নতুনত্ব", "যত্ন ও সহমর্মিতা", "সামাজিক প্রাণশক্তি", "স্থিরতা", "আত্মবিশ্বাস ও দৃঢ়তা"],
};
const personalityDescriptions = {
  en: ["Your curiosity and openness stand out. You enjoy discovering what could be next and bringing fresh energy to familiar moments.", "Care and empathy seem especially present in your answers. You pay attention to how people feel and help others feel considered.", "Social energy is a bright spot in your answers. You enjoy connecting people and adding warmth to shared moments.", "Steadiness is a strength in your answers. Your patience and reliability can help others feel grounded.", "Confidence and resilience stand out in your answers. You trust yourself to speak up, make choices, and work through challenges."],
  bn: ["আপনার কৌতূহল ও নতুন কিছুর প্রতি খোলা মন স্পষ্ট। নতুন কিছু আবিষ্কার করে পরিচিত মুহূর্তেও নতুনত্ব আনেন।", "আপনার উত্তরে যত্ন ও সহমর্মিতা বিশেষভাবে দেখা যায়। অন্যের অনুভূতি খেয়াল করেন এবং মানুষকে গুরুত্ব পাওয়া অনুভব করান।", "আপনার উত্তরে সামাজিক প্রাণশক্তি উজ্জ্বল। মানুষকে কাছে আনা ও একসঙ্গে আনন্দ তৈরি করতে ভালোবাসেন।", "আপনার উত্তরে স্থিরতা একটি বড় গুণ। আপনার ধৈর্য ও নির্ভরযোগ্যতা অন্যদের ভরসা জোগাতে পারে।", "আপনার উত্তরে আত্মবিশ্বাস ও দৃঢ়তা স্পষ্ট। নিজের কথা বলতে, সিদ্ধান্ত নিতে ও চ্যালেঞ্জ সামলাতে নিজের ওপর ভরসা রাখেন।"],
};
let wellnessMode = false;
let wellnessAnswers = [];
const wellnessCategories = ["Movement", "Rest & stress", "Nourishment", "Mood & support", "Everyday care"];
const wellnessCategoryTranslations = {
  en: wellnessCategories,
  bn: ["শরীরচর্চা", "বিশ্রাম ও চাপ সামলানো", "পুষ্টি", "মন ও সহায়তা", "দৈনন্দিন যত্ন"],
};
const wellnessQuestions = [
  { en: "How much do you make room for movement that suits your abilities?", bn: "নিজের সামর্থ্য অনুযায়ী চলাফেরা বা শরীরচর্চার জন্য আপনি কতটা সময় রাখেন?", category: 0 },
  { en: "How often do you take a short movement break after sitting for a while?", bn: "অনেকক্ষণ বসে থাকার পর আপনি কতবার একটু নড়াচড়ার বিরতি নেন?", category: 0 },
  { en: "How much do you choose activities you genuinely enjoy?", bn: "নিজের ভালো লাগে এমন শারীরিক কাজ আপনি কতটা বেছে নেন?", category: 0 },
  { en: "How well do you adapt activity to your energy and needs that day?", bn: "সেদিনের শক্তি ও প্রয়োজন বুঝে আপনি কতটা চলাফেরা মানিয়ে নেন?", category: 0 },
  { en: "How often do you include some comfortable movement in a usual week?", bn: "সাধারণ এক সপ্তাহে আপনি কতবার স্বাচ্ছন্দ্যকর কিছু চলাফেরা রাখেন?", category: 0 },
  { en: "How much do you keep a calming routine around bedtime?", bn: "ঘুমানোর আগে শান্ত হওয়ার কোনো অভ্যাস আপনি কতটা বজায় রাখেন?", category: 1 },
  { en: "How often do you wake feeling reasonably rested?", bn: "ঘুম থেকে উঠে আপনি কতবার মোটামুটি সতেজ বোধ করেন?", category: 1 },
  { en: "How much do you take breaks during a demanding day?", bn: "ব্যস্ত দিনে আপনি কতটা বিরতি নেওয়ার চেষ্টা করেন?", category: 1 },
  { en: "How often do you use a helpful way to unwind, such as a hobby or quiet time?", bn: "শখ বা নিরিবিলি সময়ের মতো কোনো উপায়ে আপনি কতবার মন হালকা করেন?", category: 1 },
  { en: "How well do you make your daily pace manageable when possible?", bn: "সম্ভব হলে নিজের দিনের গতি সামলানোর মতো রাখতে আপনি কতটা পারেন?", category: 1 },
  { en: "How much variety do you include in your meals when available?", bn: "সুযোগ থাকলে খাবারে নানা ধরনের খাবার রাখতে আপনি কতটা চেষ্টা করেন?", category: 2 },
  { en: "How often do you include fruit, vegetables, or other nourishing foods?", bn: "আপনি কতবার ফল, শাকসবজি বা পুষ্টিকর খাবার খান?", category: 2 },
  { en: "How well do you drink fluids in a way that suits your needs and day?", bn: "নিজের প্রয়োজন ও দিনের পরিস্থিতি অনুযায়ী তরল পান করতে আপনি কতটা খেয়াল রাখেন?", category: 2 },
  { en: "How much do you make food choices that leave you feeling cared for?", bn: "নিজের যত্ন হয়েছে—এমন অনুভূতি দেয় এমন খাবার বেছে নিতে আপনি কতটা পারেন?", category: 2 },
  { en: "How often do you approach eating with flexibility instead of expecting perfection?", bn: "খাবার নিয়ে নিখুঁত হওয়ার চাপ না দিয়ে আপনি কতবার নমনীয় থাকেন?", category: 2 },
  { en: "How often do you make time for activities that bring you joy?", bn: "আনন্দ দেয় এমন কাজের জন্য আপনি কতবার সময় রাখেন?", category: 3 },
  { en: "How comfortable are you talking with someone you trust when life feels difficult?", bn: "সময় কঠিন লাগলে বিশ্বাসের কারও সঙ্গে কথা বলতে আপনি কতটা স্বচ্ছন্দ?", category: 3 },
  { en: "How much do you protect time for rest and personal boundaries?", bn: "বিশ্রাম ও ব্যক্তিগত সীমারেখার জন্য সময় রাখতে আপনি কতটা পারেন?", category: 3 },
  { en: "How readily do you look for support when you feel you need it?", bn: "সহায়তা দরকার মনে হলে তা খুঁজতে আপনি কতটা প্রস্তুত?", category: 3 },
  { en: "How kindly do you speak to yourself after a difficult day?", bn: "কঠিন দিনের পর আপনি নিজের সঙ্গে কতটা সদয়ভাবে কথা বলেন?", category: 3 },
  { en: "How well do you keep up with routine care that fits your own needs?", bn: "নিজের প্রয়োজন অনুযায়ী নিয়মিত স্বাস্থ্যসেবার খোঁজ রাখতে আপনি কতটা পারেন?", category: 4 },
  { en: "How comfortable are you asking a qualified health professional about concerns?", bn: "স্বাস্থ্য নিয়ে উদ্বেগ হলে যোগ্য স্বাস্থ্যকর্মীকে জিজ্ঞেস করতে আপনি কতটা স্বচ্ছন্দ?", category: 4 },
  { en: "If you are prescribed medicine, how carefully do you follow the clinician’s instructions?", bn: "ওষুধ দেওয়া হলে চিকিৎসকের নির্দেশ আপনি কতটা মেনে চলেন?", category: 4 },
  { en: "How often do you take practical steps to keep your everyday spaces and routines safer?", bn: "দৈনন্দিন জায়গা ও অভ্যাস নিরাপদ রাখতে আপনি কতবার বাস্তব পদক্ষেপ নেন?", category: 4 },
  { en: "How much time do you make for supportive connection with other people?", bn: "অন্যদের সঙ্গে সহায়ক সম্পর্কের জন্য আপনি কতটা সময় রাখেন?", category: 4 },
];
let certificateTemplate = "classic";
const certificateTemplates = [
  { id: "classic", en: "Rose classic", bn: "রোজ ক্লাসিক", background: "#fff8f5", border: "#e8b8bd", accent: "#d85570", title: "#392b30" },
  { id: "garden", en: "Botanical garden", bn: "বোটানিক্যাল গার্ডেন", background: "#f5f8ef", border: "#a8b89b", accent: "#637b58", title: "#304333" },
  { id: "modern", en: "Modern minimal", bn: "মডার্ন মিনিমাল", background: "#f5f6f8", border: "#bbc3d0", accent: "#546781", title: "#263449" },
  { id: "midnight", en: "Midnight gold", bn: "মিডনাইট গোল্ড", background: "#202638", border: "#c9a968", accent: "#e4c77f", title: "#fff4d8" },
  { id: "confetti", en: "Celebration", bn: "উৎসব", background: "#fff9e9", border: "#e6b85c", accent: "#cf754d", title: "#493527" },
];
const coupleCountKey = "bulbuli-couples-tested";
let inMemoryCoupleCount = null;

function getCoupleCount() {
  try { return Math.max(0, Number.parseInt(localStorage.getItem(coupleCountKey) || "0", 10) || 0, inMemoryCoupleCount ?? 0); }
  catch { return inMemoryCoupleCount ?? 0; }
}

function renderFooterCount() {
  const count = formatNumber(getCoupleCount());
  const bird = `<svg class="bulbul-mark footer-bulbul" viewBox="0 0 72 58" role="img" aria-label="Bulbul bird" xmlns="http://www.w3.org/2000/svg"><path class="bird-branch" d="M5 49c20-3 40-4 63-2m-45 1-5 6m40-7 5 6"/><path class="bird-tail" d="M19 32 5 24l4 11-8 5 20 1"/><path class="bird-outline" d="M15 36c2-9 10-15 21-16 5-9 15-11 22-4 3 3 4 7 3 11-1 11-12 18-27 18-8 0-15-3-19-9Z"/><path class="bird-wing" d="M22 34c7-8 18-10 31-5-4 8-12 13-23 13-4-2-7-4-8-8Z"/><path class="bird-head" d="M39 20c2-6 7-9 13-8 6 1 9 6 9 12-1 6-5 10-11 10-6 0-10-5-11-14Z"/><path class="bird-crest" d="m44 15 1-9 5 6 3-9 3 11"/><path class="bird-beak" d="m61 20 9 3-9 3"/><circle class="bird-eye" cx="57" cy="18" r="1.5"/><ellipse class="bird-cheek" cx="58" cy="25" rx="2.2" ry="1.5"/><path class="bird-feet" d="m33 44-1 5m8-5 1 5"/></svg>`;
  document.querySelector("#footer-made").innerHTML = language === "bn"
    ? `<span class="footer-count"><strong>${count}</strong> ${bird} বুলবুলি</span>`
    : `<span class="footer-count"><strong>${count}</strong> ${bird} Bulbuli</span>`;
}

function incrementCoupleCount() {
  const nextCount = getCoupleCount() + 1;
  try { localStorage.setItem(coupleCountKey, String(nextCount)); } catch { inMemoryCoupleCount = nextCount; }
  renderFooterCount();
}

function applyLanguage() {
  const strings = translations[language];
  document.documentElement.lang = language === "bn" ? "bn" : "en";
  document.body.classList.toggle("lang-bn", language === "bn");
  document.querySelector("#brand-title").textContent = language === "bn" ? "বুলবুলি" : "Bulbuli";
  document.querySelector(".brand").setAttribute("aria-label", language === "bn" ? "বুলবুলির মূলপাতা" : "Bulbuli home");
  document.querySelector("#top-note").textContent = strings.topNote;
  document.querySelector("#eyebrow-text").textContent = strings.eyebrow;
  document.querySelector("#intro-title").innerHTML = strings.introTitle;
  document.querySelector("#intro-copy").textContent = strings.introCopy;
  document.querySelector("#meta-questions").innerHTML = strings.metaQuestions;
  document.querySelector("#meta-time").innerHTML = strings.metaTime;
  document.querySelector("#meta-fun").innerHTML = strings.metaFun;
  const startTitle = document.querySelector("#start-title");
  if (startTitle) startTitle.textContent = strings.startTitle;
  const startCopy = document.querySelector("#start-copy");
  if (startCopy) startCopy.textContent = strings.startCopy;
  const startButton = document.querySelector("#start-button");
  if (startButton) startButton.innerHTML = `${strings.startButton} <span>→</span>`;
  const personalityStart = document.querySelector("#personality-start-button");
  if (personalityStart) personalityStart.innerHTML = `${language === "bn" ? "ব্যক্তিত্ব কুইজ" : "Personality Quiz"} <span>→</span>`;
  const wellnessStart = document.querySelector("#wellness-start-button");
  if (wellnessStart) wellnessStart.innerHTML = `${language === "bn" ? "স্বাস্থ্য কুইজ" : "Health Quiz"} <span>→</span>`;
  renderFooterCount();
  document.querySelector("#footer-private").textContent = language === "bn" ? "আপনার উত্তর ও ছবি এই ডিভাইসেই থাকে" : "Your answers and photos stay on this device";
  const toggle = document.querySelector("#language-toggle");
  toggle.textContent = strings.toggle;
  toggle.setAttribute("aria-label", language === "en" ? "বাংলায় পরিবর্তন করুন" : "Switch to English");
  document.title = language === "bn" ? "বুলবুলি" : "Bulbuli";
  if (screen === "start") {
    stepLabel.textContent = language === "bn" ? "আপনার প্রশ্নগুলো" : "YOUR QUESTIONS";
    progressLabel.textContent = t("ready");
  }
  if (screen === "name") renderNameForm();
  if (screen === "question") renderQuestion();
  if (screen === "result") renderResults();
  if (screen === "personality-question") renderPersonalityQuestion();
  if (screen === "personality-result") renderPersonalityResults();
  if (screen === "wellness-question") renderWellnessQuestion();
  if (screen === "wellness-result") renderWellnessResults();
}

document.querySelector("#language-toggle").addEventListener("click", () => {
  language = language === "en" ? "bn" : "en";
  applyLanguage();
});
applyLanguage();

document.querySelector("#start-button").addEventListener("click", renderNameForm);
document.querySelector("#personality-start-button").addEventListener("click", () => {
  personalityMode = true;
  wellnessMode = false;
  personalityAnswers = [];
  personalityProfile = null;
  renderNameForm();
});
document.querySelector("#wellness-start-button").addEventListener("click", () => {
  personalityMode = false;
  wellnessMode = true;
  wellnessAnswers = [];
  renderNameForm();
});

function renderNameForm() {
  screen = "name";
  stepLabel.textContent = t("nameIntro");
  progressLabel.textContent = t("beforeBegin");
  const nameFormTitle = personalityMode
    ? (language === "bn" ? "নিজের ব্যক্তিত্ব যাচাই করুন" : "Test your personality")
    : wellnessMode
      ? (language === "bn" ? "নিজের স্বাস্থ্য যাচাই করুন" : "Test your health")
    : t("nameTitle");
  const nameFormCopy = personalityMode
    ? (language === "bn" ? "আপনার নাম লিখুন এবং সার্টিফিকেটের জন্য চাইলে একটি ছবি যোগ করুন।" : "Enter your name and optionally add a photo for your certificate.")
    : wellnessMode
      ? (language === "bn" ? "আপনার নাম লিখুন এবং চাইলে সার্টিফিকেটের জন্য একটি ছবি যোগ করুন। এটি চিকিৎসা মূল্যায়ন নয়—শুধু দৈনন্দিন অভ্যাস নিয়ে ভাবনার জন্য।" : "Enter your name and optionally add a photo for your certificate. This reflects on everyday habits, not a medical assessment.")
    : t("nameCopy");
  const mascotImage = wellnessMode ? "bulbuli-health.png" : personalityMode ? "bulbuli-personality.png" : "bulbuli-pair.png";
  const mascotClass = personalityMode || wellnessMode ? "quiz-mascot single-mascot" : "quiz-mascot";
  content.innerHTML = `
    <form class="name-form" id="name-form" novalidate>
      <div class="big-heart ${mascotClass}" aria-hidden="true"><img src="${mascotImage}" alt="" /></div>
      <h2>${nameFormTitle}</h2>
      <p>${nameFormCopy}</p>
      <div class="person-entry">
        <div class="photo-preview" id="user-photo-preview">${photoMarkup(photos.user, userName)}</div>
        <div class="person-fields">
          <label for="your-name">${personalityMode || wellnessMode ? (language === "bn" ? "আপনার নাম" : "Your name") : t("yourName")}</label>
          <input id="your-name" name="yourName" maxlength="50" autocomplete="given-name" placeholder="${personalityMode || wellnessMode ? (language === "bn" ? "যেমন: রিয়া" : "e.g. Riley") : t("yourPlaceholder")}" value="${escapeHtml(userName)}" required />
          <label class="photo-picker">${photos.user ? photoCopy[language].change : (language === "bn" ? "কার্ডে ছবি যোগ করুন (ঐচ্ছিক)" : "Add a photo to your card (optional)")}<input id="user-photo" type="file" accept="image/jpeg,image/png,image/webp" /></label>
        </div>
      </div>
      ${personalityMode || wellnessMode ? "" : `<div class="person-entry">
        <div class="photo-preview" id="beloved-photo-preview">${photoMarkup(photos.beloved, belovedName)}</div>
        <div class="person-fields">
          <label for="beloved-name">${t("belovedName")}</label>
          <input id="beloved-name" name="belovedName" maxlength="50" placeholder="${t("belovedPlaceholder")}" value="${escapeHtml(belovedName)}" required />
        </div>
      </div>`}
      <p class="photo-error" id="photo-error" role="status"></p>
      <button class="primary-button" type="submit">${personalityMode || wellnessMode ? (language === "bn" ? "কুইজ শুরু করুন" : "Start the quiz") : t("continue")} <span>→</span></button>
    </form>`;
  document.querySelector("#name-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredUserName = String(data.get("yourName") || "").trim();
    const enteredBelovedName = personalityMode || wellnessMode ? "" : String(data.get("belovedName") || "").trim();
    const invalidUserName = !isValidName(enteredUserName);
    const invalidBelovedName = !personalityMode && !wellnessMode && !isValidName(enteredBelovedName);
    if (invalidUserName || invalidBelovedName) {
      document.querySelector("#photo-error").textContent = language === "bn"
        ? "নামে অন্তত ৩টি বর্ণ থাকতে হবে; শুধু বর্ণ ও ফাঁক ব্যবহার করুন।"
        : "Names need at least 3 letters and may contain only letters and spaces.";
      document.querySelector(invalidUserName ? "#your-name" : "#beloved-name").focus();
      return;
    }
    document.querySelector("#photo-error").textContent = "";
    userName = enteredUserName;
    belovedName = enteredBelovedName;
    current = 0;
    if (personalityMode) renderPersonalityQuestion();
    else if (wellnessMode) renderWellnessQuestion();
    else renderQuestion();
  });
  document.querySelector("#your-name").addEventListener("input", (event) => {
    userName = event.currentTarget.value;
    document.querySelector("#photo-error").textContent = "";
    if (!photos.user) document.querySelector("#user-photo-preview").innerHTML = photoMarkup(null, userName);
  });
  document.querySelector("#user-photo").addEventListener("change", (event) => handlePhotoChange(event, "user"));
  if (!personalityMode && !wellnessMode) {
    document.querySelector("#beloved-name").addEventListener("input", (event) => {
      belovedName = event.currentTarget.value;
      document.querySelector("#photo-error").textContent = "";
      if (!photos.beloved) document.querySelector("#beloved-photo-preview").innerHTML = photoMarkup(null, belovedName);
    });
  }
  document.querySelector("#your-name").focus();
}

function photoMarkup(photo, name) {
  return photo ? `<img src="${photo}" alt="" />` : `<span>${escapeHtml(name.trim().charAt(0) || "♥")}</span>`;
}

function isValidName(name) {
  const trimmed = name.trim();
  const letters = trimmed.match(/\p{L}/gu) || [];
  return letters.length >= 3 && /^[\p{L}\p{M}\s]+$/u.test(trimmed);
}

function handlePhotoChange(event, person) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  const error = document.querySelector("#photo-error");
  if (!file) return;
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 8 * 1024 * 1024) {
    error.textContent = photoCopy[language].error;
    input.value = "";
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    photos[person] = String(reader.result);
    error.textContent = "";
    const preview = document.querySelector(`#${person}-photo-preview`);
    const name = person === "user" ? userName : person === "beloved" ? belovedName : "♥";
    preview.innerHTML = photoMarkup(photos[person], name);
    const picker = input.closest(".photo-picker");
    picker.firstChild.textContent = photoCopy[language].change;
  });
  reader.readAsDataURL(file);
}

function renderQuestion() {
  screen = "question";
  const question = questions[current];
  stepLabel.textContent = `${t("questionLabel")} ${formatNumber(current + 1)} / ${formatNumber(questions.length)}`;
  progressLabel.textContent = `${formatNumber(Math.round((current / questions.length) * 100))}% ${language === "bn" ? "সম্পন্ন" : "complete"}`;
  fill.style.width = `${(current / questions.length) * 100}%`;
  content.innerHTML = `
    <div class="question-wrap">
      <span class="category">${localizeCategory(question.category)}</span>
      <h2 class="question">${language === "bn" ? banglaQuestions[current] : question.text}</h2>
      <p class="hint">${t("hint")}</p>
      <div class="answers" role="group" aria-label="${t("answerGroup")}">
        ${choices.map((choice, index) => `<button class="answer" data-value="${choice.value}"><span class="answer-dot">${formatNumber(index + 1)}</span>${t("choices")[index]}</button>`).join("")}
      </div>
      <div class="quiz-nav"><button class="text-button" id="back-button" ${current === 0 ? "disabled" : ""}>${t("back")}</button><button class="text-button" id="skip-button">${t("skip")}</button></div>
    </div>`;
  content.querySelectorAll(".answer").forEach((button) => button.addEventListener("click", () => choose(Number(button.dataset.value))));
  document.querySelector("#back-button").addEventListener("click", () => { if (current > 0) { current -= 1; renderQuestion(); } });
  document.querySelector("#skip-button").addEventListener("click", () => choose(null));
}

function renderPersonalityQuestion() {
  screen = "personality-question";
  const question = personalityQuestions[current];
  stepLabel.textContent = language === "bn" ? `ব্যক্তিত্ব ${formatNumber(current + 1)} / ${formatNumber(personalityQuestions.length)}` : `PERSONALITY ${current + 1} / ${personalityQuestions.length}`;
  progressLabel.textContent = `${formatNumber(Math.round((current / personalityQuestions.length) * 100))}% ${language === "bn" ? "সম্পন্ন" : "complete"}`;
  fill.style.width = `${(current / personalityQuestions.length) * 100}%`;
  const prompt = language === "bn" ? question.bn : question.en;
  content.innerHTML = `<div class="question-wrap"><span class="category">${language === "bn" ? "ব্যক্তিত্বের ধরন" : "A personality snapshot"}</span><h2 class="question">${prompt}</h2><p class="hint">${language === "bn" ? "নিজের সঙ্গে কতটা মেলে, তা বেছে নিন।" : "Choose how much each statement describes you."}</p><div class="answers" role="group" aria-label="${t("answerGroup")}">${t("choices").map((choice, index) => `<button class="answer" data-value="${choices[index].value}"><span class="answer-dot">${formatNumber(index + 1)}</span>${choice}</button>`).join("")}</div><div class="quiz-nav"><button class="text-button" id="back-button" ${current === 0 ? "disabled" : ""}>${t("back")}</button><button class="text-button" id="skip-button">${t("skip")}</button></div></div>`;
  content.querySelectorAll(".answer").forEach((button) => button.addEventListener("click", () => choosePersonality(Number(button.dataset.value))));
  document.querySelector("#back-button").addEventListener("click", () => { if (current > 0) { current -= 1; renderPersonalityQuestion(); } });
  document.querySelector("#skip-button").addEventListener("click", () => choosePersonality(null));
}

function choosePersonality(value) {
  personalityAnswers[current] = value;
  if (current < personalityQuestions.length - 1) { current += 1; renderPersonalityQuestion(); return; }
  const averages = personalityTraits.map((_, trait) => {
    const values = personalityQuestions.map((question, index) => question.trait === trait ? personalityAnswers[index] : null).filter((answer) => answer !== null);
    return values.length ? values.reduce((sum, answer) => sum + answer, 0) / values.length : null;
  });
  const highest = Math.max(...averages.filter((average) => average !== null), 0);
  personalityProfile = highest ? averages.indexOf(highest) : null;
  renderPersonalityResults();
}

function renderPersonalityResults() {
  screen = "personality-result";
  stepLabel.textContent = language === "bn" ? "আপনার ব্যক্তিত্বের ঝলক" : "PERSONALITY SNAPSHOT";
  progressLabel.textContent = t("complete");
  fill.style.width = "100%";
  const title = personalityProfile === null
    ? (language === "bn" ? "আরও একটু জানার বাকি" : "A personality profile awaits")
    : personalityOptions[language][personalityProfile];
  const copy = personalityProfile === null
    ? (language === "bn" ? "সব প্রশ্ন এড়িয়ে গেছেন—একটি উত্তর দিলেই ব্যক্তিত্বের ঝলক তৈরি হবে।" : "You skipped every question. Answer at least one to reveal a personality snapshot.")
    : personalityDescriptions[language][personalityProfile];
  content.innerHTML = `<div class="results"><div class="score-ring personality-ring"><div><div class="score-number">✦</div><div class="score-caption">${language === "bn" ? "ব্যক্তিত্বের ঝলক" : "PERSONALITY SNAPSHOT"}</div></div></div><p class="names-line">${escapeHtml(userName)}</p><h2>${title}</h2><p class="result-copy">${copy}</p><div class="results-actions"><button class="primary-button" id="certificate-button">${t("certificate")} <span>↓</span></button><button class="secondary-button" id="again-button">${t("retake")} <span>↻</span></button></div><p class="disclaimer">${language === "bn" ? "এটি আপনার নিজের উত্তরের ভিত্তিতে তৈরি মজার একটি ঝলক—কোনো বৈজ্ঞানিক ব্যক্তিত্ব মূল্যায়ন নয়।" : "A playful snapshot based on your self-reported answers, not a scientific personality assessment."}</p></div>`;
  document.querySelector("#again-button").addEventListener("click", reset);
  document.querySelector("#certificate-button").addEventListener("click", downloadPersonalityCertificate);
}

async function downloadPersonalityCertificate() {
  const button = document.querySelector("#certificate-button");
  button.disabled = true;
  button.textContent = t("preparing");
  try {
    const font = language === "bn" ? "'Noto Sans Bengali', 'Vrinda', sans-serif" : "'DM Sans', sans-serif";
    if (document.fonts?.load) {
      if (language === "bn") await document.fonts.load("400 24px 'Noto Sans Bengali'", "ব্যক্তিত্বের সার্টিফিকেট");
      else await document.fonts.load("400 78px 'Great Vibes'", userName);
    }
    if (document.fonts?.ready) await document.fonts.ready;
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1131;
    const context = canvas.getContext("2d");
    context.fillStyle = "#f2eee9";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    context.shadowColor = "rgba(52, 37, 33, 0.16)";
    context.shadowBlur = 34;
    context.shadowOffsetY = 12;
    roundedRect(context, 70, 70, 1460, 991, 38);
    context.fill();
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;

    const photoBox = { x: 112, y: 112, width: 610, height: 907, radius: 26 };
    context.save();
    roundedRect(context, photoBox.x, photoBox.y, photoBox.width, photoBox.height, photoBox.radius);
    context.clip();
    if (photos.user) {
      await drawCoverImage(context, photos.user, photoBox.x, photoBox.y, photoBox.width, photoBox.height);
    } else {
      const gradient = context.createLinearGradient(photoBox.x, photoBox.y, photoBox.x + photoBox.width, photoBox.y + photoBox.height);
      gradient.addColorStop(0, "#f8d9d5");
      gradient.addColorStop(1, "#e7b3ae");
      context.fillStyle = gradient;
      context.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);
      context.fillStyle = "rgba(255,255,255,0.82)";
      context.font = language === "bn" ? `600 190px ${font}` : "600 210px 'Playfair Display', Georgia, serif";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(userName.trim().charAt(0).toUpperCase() || "♥", photoBox.x + photoBox.width / 2, photoBox.y + photoBox.height / 2);
      context.textBaseline = "alphabetic";
    }
    context.restore();

    const textLeft = 800;
    context.textAlign = "left";
    context.fillStyle = "#c35c68";
    context.font = `700 25px ${font}`;
    context.fillText(language === "bn" ? "ব্যক্তিত্বের ছোট্ট ঝলক" : "YOUR PERSONALITY SNAPSHOT", textLeft, 245);
    context.fillStyle = "#362c2c";
    context.font = language === "bn" ? `600 72px ${font}` : "400 104px 'Great Vibes', cursive";
    context.fillText(userName, textLeft, 390, 650);
    const profileTitle = personalityProfile === null
      ? (language === "bn" ? "আরও একটু জানার বাকি" : "A personality profile awaits")
      : personalityOptions[language][personalityProfile];
    context.fillStyle = "#a54158";
    context.font = language === "bn" ? `600 54px ${font}` : "600 48px 'Playfair Display', Georgia, serif";
    context.fillText(profileTitle, textLeft, 500, 650);
    const description = personalityProfile === null
      ? (language === "bn" ? "আপনার উত্তরের ভিত্তিতে ব্যক্তিত্বের ফল তৈরি হবে।" : "Your answers will shape your personality snapshot.")
      : personalityDescriptions[language][personalityProfile];
    context.fillStyle = "#645b5b";
    context.font = `400 ${language === "bn" ? 27 : 26}px ${font}`;
    drawWrappedText(context, description, textLeft, 565, 630, 42, 5);
    const date = new Intl.DateTimeFormat(language === "bn" ? "bn-BD" : undefined, { dateStyle: "long" }).format(new Date());
    context.fillStyle = "#887b7e";
    context.font = `400 23px ${font}`;
    context.fillText(language === "bn" ? `${date} · শুধুই মজার জন্য` : `Created ${date} · Just for fun`, textLeft, 900);
    context.font = `400 19px ${font}`;
    context.fillText(language === "bn" ? "মজার জন্য তৈরি একটি ঝলক—বৈজ্ঞানিক মূল্যায়ন নয়।" : "A playful impression, not a scientific personality assessment.", textLeft, 950, 650);
    const jpeg = dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.94));
    const pdf = makeImagePdf(jpeg, canvas.width, canvas.height);
    const url = URL.createObjectURL(pdf);
    const link = document.createElement("a");
    link.href = url;
    link.download = `personality-${safeFilename(userName)}.pdf`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    console.error("Could not create the personality certificate PDF", error);
    button.textContent = t("pdfFailed");
    button.disabled = false;
    return;
  }
  button.textContent = t("downloaded");
  window.setTimeout(() => { button.innerHTML = `${t("certificate")} <span>↓</span>`; button.disabled = false; }, 2500);
}

function roundedRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function drawPhotoCardShell(context, accent = "#c35c68") {
  context.fillStyle = "#f2eee9";
  context.fillRect(0, 0, 1600, 1131);
  context.fillStyle = "#ffffff";
  context.shadowColor = "rgba(52, 37, 33, 0.16)";
  context.shadowBlur = 34;
  context.shadowOffsetY = 12;
  roundedRect(context, 70, 70, 1460, 991, 38);
  context.fill();
  context.shadowColor = "transparent";
  context.shadowBlur = 0;
  context.shadowOffsetY = 0;
  context.fillStyle = accent;
  roundedRect(context, 112, 112, 610, 907, 26);
  context.fill();
}

async function drawPhotoCardImageOrMonogram(context, photo, name, font) {
  const x = 112;
  const y = 112;
  const width = 610;
  const height = 907;
  context.save();
  roundedRect(context, x, y, width, height, 26);
  context.clip();
  if (photo) {
    try {
      await drawCoverImage(context, photo, x, y, width, height);
    } catch {
      drawPhotoMonogram(context, name, font, x, y, width, height);
    }
  } else {
    drawPhotoMonogram(context, name, font, x, y, width, height);
  }
  context.restore();
}

function drawPhotoMonogram(context, name, font, x, y, width, height) {
  const gradient = context.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, "#f8d9d5");
  gradient.addColorStop(1, "#e7b3ae");
  context.fillStyle = gradient;
  context.fillRect(x, y, width, height);
  context.fillStyle = "rgba(255,255,255,0.82)";
  context.font = `600 ${font.includes("Noto Sans Bengali") ? 190 : 210}px ${font}`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(name.trim().charAt(0).toLocaleUpperCase() || "♥", x + width / 2, y + height / 2);
  context.textBaseline = "alphabetic";
}

async function drawCoverImage(context, dataUrl, x, y, width, height) {
  const image = new Image();
  await new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
    image.src = dataUrl;
  });
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  context.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines) {
  const words = String(text).split(/\s+/);
  let line = "";
  let lines = 0;
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && context.measureText(candidate).width > maxWidth) {
      context.fillText(line, x, y + lines * lineHeight);
      lines += 1;
      if (lines >= maxLines) return;
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line && lines < maxLines) context.fillText(line, x, y + lines * lineHeight);
}

function renderWellnessQuestion() {
  screen = "wellness-question";
  const question = wellnessQuestions[current];
  stepLabel.textContent = language === "bn" ? `সুস্থতা ${formatNumber(current + 1)} / ${formatNumber(wellnessQuestions.length)}` : `WELLNESS ${current + 1} / ${wellnessQuestions.length}`;
  progressLabel.textContent = `${formatNumber(Math.round((current / wellnessQuestions.length) * 100))}% ${language === "bn" ? "সম্পন্ন" : "complete"}`;
  fill.style.width = `${(current / wellnessQuestions.length) * 100}%`;
  const prompt = language === "bn" ? question.bn : question.en;
  const category = wellnessCategoryTranslations[language][question.category];
  content.innerHTML = `<div class="question-wrap"><span class="category">${category}</span><h2 class="question">${prompt}</h2><p class="hint">${language === "bn" ? "আপনার দৈনন্দিন অভ্যাসের সঙ্গে কতটা মেলে, তা বেছে নিন।" : "Choose how much each statement reflects your usual routines."}</p><div class="answers" role="group" aria-label="${t("answerGroup")}">${t("choices").map((choice, index) => `<button class="answer" data-value="${choices[index].value}"><span class="answer-dot">${formatNumber(index + 1)}</span>${choice}</button>`).join("")}</div><div class="quiz-nav"><button class="text-button" id="back-button" ${current === 0 ? "disabled" : ""}>${t("back")}</button><button class="text-button" id="skip-button">${t("skip")}</button></div></div>`;
  content.querySelectorAll(".answer").forEach((button) => button.addEventListener("click", () => chooseWellness(Number(button.dataset.value))));
  document.querySelector("#back-button").addEventListener("click", () => { if (current > 0) { current -= 1; renderWellnessQuestion(); } });
  document.querySelector("#skip-button").addEventListener("click", () => chooseWellness(null));
}

function chooseWellness(value) {
  wellnessAnswers[current] = value;
  if (current < wellnessQuestions.length - 1) { current += 1; renderWellnessQuestion(); return; }
  renderWellnessResults();
}

function renderWellnessResults() {
  screen = "wellness-result";
  stepLabel.textContent = language === "bn" ? "দৈনন্দিন সুস্থতার ঝলক" : "WELLNESS REFLECTION";
  progressLabel.textContent = t("complete");
  fill.style.width = "100%";
  const scores = wellnessCategories.map((_, category) => {
    const values = wellnessQuestions.map((question, index) => question.category === category ? wellnessAnswers[index] : null).filter((value) => value !== null);
    const average = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
    return { category, average };
  });
  const hasAnswers = wellnessAnswers.some((value) => value !== null && value !== undefined);
  const summary = hasAnswers
    ? (language === "bn" ? "এগুলো আপনার বেছে নেওয়া অভ্যাসের একটি সাধারণ ঝলক। ছোট ছোট পরিবর্তন নিয়েও ভাবতে পারেন, তবে আপনার প্রয়োজন ব্যক্তিভেদে আলাদা।" : "These are a simple reflection of the routines you selected. You might use them to notice habits you want to nurture; needs differ from person to person.")
    : (language === "bn" ? "কোনো প্রশ্নের উত্তর দেওয়া হয়নি, তাই অভ্যাসের ঝলক দেখানো যাচ্ছে না।" : "No questions were answered, so there is no routine snapshot to show.");
  const categories = scores.map((item) => `<div class="category-row"><span>${wellnessCategoryTranslations[language][item.category]}</span><div class="mini-track"><div class="mini-fill" style="width:${item.average === null ? 0 : Math.round((item.average / 5) * 100)}%"></div></div><span class="category-value">${item.average === null ? "—" : `${formatNumber(Number(item.average.toFixed(1)))} / 5`}</span></div>`).join("");
  const scaleLabel = language === "bn" ? "দৈনন্দিন অভ্যাসের স্ব-প্রতিবেদিত মিল (১–৫)" : "Self-reported fit of these routines (1–5)";
  content.innerHTML = `<div class="results"><div class="score-ring personality-ring"><div><div class="score-number">✦</div><div class="score-caption">${language === "bn" ? "সুস্থতার ঝলক" : "WELLNESS SNAPSHOT"}</div></div></div><p class="names-line">${escapeHtml(userName)}</p><h2>${language === "bn" ? "দৈনন্দিন সুস্থতার প্রতিফলন" : "Everyday wellness reflection"}</h2><p class="result-copy">${summary}</p><p class="hint">${scaleLabel}</p><div class="category-scores">${categories}</div><div class="results-actions"><button class="primary-button" id="certificate-button">${t("certificate")} <span>↓</span></button><button class="secondary-button" id="again-button">${t("retake")} <span>↻</span></button></div><p class="disclaimer">${language === "bn" ? "এটি কোনো স্বাস্থ্য স্কোর, রোগ নির্ণয় বা চিকিৎসা পরামর্শ নয়। স্বাস্থ্য নিয়ে প্রশ্ন থাকলে যোগ্য স্বাস্থ্যসেবা পেশাজীবীর সঙ্গে কথা বলুন।" : "This is not a health score, diagnosis, or medical advice. For personal health concerns, speak with a qualified health professional."}</p></div>`;
  document.querySelector("#again-button").addEventListener("click", reset);
  document.querySelector("#certificate-button").addEventListener("click", downloadWellnessCertificate);
}

function wellnessCertificateCategory() {
  const values = wellnessAnswers.filter((value) => Number.isInteger(value) && value >= 1 && value <= 5);
  if (!values.length) return { en: "Not enough answers", bn: "উত্তর যথেষ্ট নয়" };
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const index = average >= 4.5 ? 0 : average >= 3.8 ? 1 : average >= 3.1 ? 2 : average >= 2.4 ? 3 : 4;
  return {
    en: ["Athletic", "Very fit", "Healthy", "Moderately fit", "Needs improvement"][index],
    bn: ["অ্যাথলেটিক", "খুব ফিট", "সুস্থ", "মাঝারি ফিট", "উন্নতির সুযোগ"][index],
  };
}

async function downloadWellnessCertificate() {
  const button = document.querySelector("#certificate-button");
  button.disabled = true;
  button.textContent = t("preparing");
  try {
    const font = language === "bn" ? "'Noto Sans Bengali', 'Vrinda', sans-serif" : "'DM Sans', sans-serif";
    if (document.fonts?.load) {
      if (language === "bn") await document.fonts.load("400 24px 'Noto Sans Bengali'", "সুস্থতার প্রতিফলন");
      else await document.fonts.load("400 78px 'Great Vibes'", userName);
    }
    if (document.fonts?.ready) await document.fonts.ready;
    const wellnessClass = wellnessCertificateCategory();
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1131;
    const context = canvas.getContext("2d");
    drawPhotoCardShell(context);
    await drawPhotoCardImageOrMonogram(context, photos.user, userName, font);
    const textLeft = 800;
    context.textAlign = "left";
    context.fillStyle = "#4e7865";
    context.font = `700 25px ${font}`;
    context.fillText(language === "bn" ? "আপনার স্বাস্থ্য কার্ড" : "YOUR HEALTH SNAPSHOT", textLeft, 240);
    context.fillStyle = "#263d34";
    context.font = language === "bn" ? `600 72px ${font}` : "400 96px 'Great Vibes', cursive";
    context.fillText(userName, textLeft, 390, 650);
    context.fillStyle = "#4e7865";
    context.font = `500 24px ${font}`;
    context.fillText(language === "bn" ? "আপনার সুস্থতার শ্রেণি" : "YOUR WELLNESS CATEGORY", textLeft, 495, 650);
    context.fillStyle = "#263d34";
    context.font = language === "bn" ? `600 48px ${font}` : "600 54px 'Playfair Display', Georgia, serif";
    context.fillText(wellnessClass[language], textLeft, 575, 650);
    const date = new Intl.DateTimeFormat(language === "bn" ? "bn-BD" : undefined, { dateStyle: "long" }).format(new Date());
    context.fillStyle = "#887b7e";
    context.font = `400 23px ${font}`;
    context.fillText(language === "bn" ? `${date} · শুধুই ভাবনার জন্য` : `Created ${date} · For reflection`, textLeft, 890);
    context.font = `400 19px ${font}`;
    drawWrappedText(context, language === "bn" ? "এই শ্রেণি কেবল কুইজের স্ব-প্রতিবেদিত উত্তরের ভিত্তিতে; এটি ফিটনেস পরীক্ষা, চিকিৎসা মূল্যায়ন বা রোগ নির্ণয় নয়।" : "Based only on self-reported quiz answers; not a fitness test, medical assessment, or diagnosis.", textLeft, 945, 650, 29, 3);
    const jpeg = dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.94));
    const pdf = makeImagePdf(jpeg, canvas.width, canvas.height);
    const url = URL.createObjectURL(pdf);
    const link = document.createElement("a");
    link.href = url;
    link.download = `wellness-${safeFilename(userName)}.pdf`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    console.error("Could not create the wellness certificate PDF", error);
    button.textContent = t("pdfFailed");
    button.disabled = false;
    return;
  }
  button.textContent = t("downloaded");
  window.setTimeout(() => { button.innerHTML = `${t("certificate")} <span>↓</span>`; button.disabled = false; }, 2500);
}

function choose(value) {
  answers[current] = value;
  if (current < questions.length - 1) { current += 1; renderQuestion(); }
  else { incrementCoupleCount(); renderResults(); }
}

function renderResults() {
  screen = "result";
  const answered = answers.filter((value) => value !== null);
  const score = answered.length ? Math.round(((answered.reduce((sum, value) => sum + value, 0) - answered.length) / (answered.length * 4)) * 100) : 0;
  const groups = [...new Set(questions.map((question) => question.category))];
  const categoryScores = groups.map((name) => {
    const values = questions.map((question, index) => question.category === name ? answers[index] : null).filter((value) => value !== null);
    return { name, score: values.length ? Math.round(((values.reduce((sum, value) => sum + value, 0) - values.length) / (values.length * 4)) * 100) : null };
  });
  let titleKey, copyKey;
  if (!answered.length) { titleKey = "noAnswersTitle"; copyKey = "noAnswersCopy"; }
  else if (score >= 80) { titleKey = "highTitle"; copyKey = "highCopy"; }
  else if (score >= 60) { titleKey = "goodTitle"; copyKey = "goodCopy"; }
  else if (score >= 40) { titleKey = "midTitle"; copyKey = "midCopy"; }
  else { titleKey = "lowTitle"; copyKey = "lowCopy"; }

  stepLabel.textContent = t("heartCheck");
  progressLabel.textContent = t("complete");
  fill.style.width = "100%";
  content.innerHTML = `
    <div class="results">
      <div class="score-ring" style="--score:${score}%"><div><div class="score-number">${formatNumber(score)}</div><div class="score-caption">${t("outOf")}</div></div></div>
      <p class="names-line">${escapeHtml(userName)} &nbsp; <span>♥</span> &nbsp; ${escapeHtml(belovedName)}</p>
      <h2>${t(titleKey)}</h2>
      <p class="result-copy">${t(copyKey)}</p>
      <div class="category-scores">${categoryScores.map((item) => `<div class="category-row"><span>${localizeCategory(item.name)}</span><div class="mini-track"><div class="mini-fill" style="width:${item.score ?? 0}%"></div></div><span class="category-value">${item.score === null ? "—" : formatNumber(item.score)}</span></div>`).join("")}</div>
      <div class="reflection"><strong>${t("reflectionTitle")}</strong>${reflectionFor(categoryScores)}</div>
      <fieldset class="template-picker"><legend>${language === "bn" ? "সার্টিফিকেটের নকশা বেছে নিন" : "Choose a certificate design"}</legend><div class="template-options">${certificateTemplates.map((template) => `<label class="template-option ${certificateTemplate === template.id ? "selected" : ""}"><input type="radio" name="certificate-template" value="${template.id}" ${certificateTemplate === template.id ? "checked" : ""}><span class="template-swatch template-${template.id}" aria-hidden="true"><span>♥</span></span><span class="template-name">${language === "bn" ? template.bn : template.en}</span></label>`).join("")}</div></fieldset>
      <div class="results-actions"><button class="primary-button" id="certificate-button">${t("certificate")} <span>↓</span></button><button class="secondary-button" id="again-button">${t("retake")} <span>↻</span></button></div>
      <p class="disclaimer">${t("disclaimer")}</p>
    </div>`;
  document.querySelector("#again-button").addEventListener("click", reset);
  document.querySelectorAll('input[name="certificate-template"]').forEach((input) => input.addEventListener("change", () => {
    certificateTemplate = input.value;
    document.querySelectorAll(".template-option").forEach((option) => option.classList.toggle("selected", option.querySelector("input").checked));
  }));
  document.querySelector("#certificate-button").addEventListener("click", () => downloadCertificate(score, answered.length > 0));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

async function downloadCertificate(score, hasScore) {
  const button = document.querySelector("#certificate-button");
  button.disabled = true;
  button.textContent = t("preparing");
  try {
    if (document.fonts?.load) {
      if (language === "bn") await document.fonts.load("400 24px 'Noto Sans Bengali'", "ভালোবাসার সার্টিফিকেট");
      else await document.fonts.load("400 78px 'Great Vibes'", `${userName} ${belovedName}`);
    }
    if (document.fonts?.ready) await document.fonts.ready;
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1131;
    const context = canvas.getContext("2d");
    const design = certificateTemplates.find((template) => template.id === certificateTemplate) || certificateTemplates[0];
    const banglaFont = language === "bn" ? "'Noto Sans Bengali', 'Vrinda', sans-serif" : "'DM Sans', sans-serif";
    drawPhotoCardShell(context, design.accent);
    await drawPhotoCardImageOrMonogram(context, photos.user, userName, banglaFont);
    context.textAlign = "left";
    const textLeft = 800;
    const displayDate = new Intl.DateTimeFormat(language === "bn" ? "bn-BD" : undefined, { dateStyle: "long" }).format(new Date());
    context.fillStyle = design.accent;
    context.font = `700 24px ${banglaFont}`;
    context.letterSpacing = "7px";
    context.fillText(t("certEyebrow"), textLeft, 230, 680);
    context.letterSpacing = "0px";
    context.fillStyle = design.title;
    context.font = language === "bn" ? `600 72px ${banglaFont}` : "600 76px 'Playfair Display', Georgia, serif";
    context.fillText(t("certTitle"), textLeft, 330, 680);
    context.fillStyle = "#887b7e";
    context.font = `400 28px ${banglaFont}`;
    context.fillText(t("certBetween"), textLeft, 395);
    context.fillStyle = design.accent;
    context.font = language === "bn" ? `600 54px ${banglaFont}` : "400 78px 'Great Vibes', cursive";
    context.fillText(userName, textLeft, 535, 290);
    context.fillStyle = design.accent;
    context.font = `700 38px ${banglaFont}`;
    context.fillText("♥", textLeft + 310, 535);
    context.fillStyle = design.accent;
    context.font = language === "bn" ? `600 54px ${banglaFont}` : "400 78px 'Great Vibes', cursive";
    context.fillText(belovedName, textLeft + 370, 535, 280);
    context.fillStyle = "#887b7e";
    context.font = `400 23px ${banglaFont}`;
    context.fillText(language === "bn" ? "আপনাদের ভালোবাসার ঝলক" : "YOUR CONNECTION SNAPSHOT", textLeft, 620);
    context.fillStyle = design.accent;
    context.font = `700 92px ${banglaFont}`;
    context.fillText(hasScore ? `${formatNumber(score)}%` : "♡", textLeft, 755);
    context.fillStyle = "#887b7e";
    context.font = `500 22px ${banglaFont}`;
    context.fillText(hasScore ? t("certScore") : t("certBlank"), textLeft, 805, 650);
    context.fillStyle = "#9a8b8e";
    context.font = `400 20px ${banglaFont}`;
    context.fillText(language === "bn" ? `${displayDate} · ${t("justForFun")}` : `Created ${displayDate} · ${t("justForFun")}`, textLeft, 920);
    context.font = `400 16px ${banglaFont}`;
    drawWrappedText(context, t("certDisclaimer"), textLeft, 967, 670, 25, 3);

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
    button.textContent = t("pdfFailed");
    button.disabled = false;
    return;
  }
  button.textContent = t("downloaded");
  window.setTimeout(() => { button.innerHTML = `${t("certificate")} <span>↓</span>`; button.disabled = false; }, 2500);
}

async function drawPortrait(context, dataUrl, name, x, y, font, radius = 61) {
  context.save();
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = "#fbe8e5";
  context.fill();
  if (dataUrl) {
    const image = new Image();
    try {
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
        image.src = dataUrl;
      });
      context.clip();
      const scale = Math.max((radius * 2) / image.width, (radius * 2) / image.height);
      const width = image.width * scale;
      const height = image.height * scale;
      context.drawImage(image, x - width / 2, y - height / 2, width, height);
    } catch {
      drawInitial();
    }
  } else {
    drawInitial();
  }
  context.restore();
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.strokeStyle = "#e8b8bd";
  context.lineWidth = 4;
  context.stroke();

  function drawInitial() {
    context.fillStyle = "#d85570";
    context.font = `600 48px ${font}`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(name.trim().charAt(0) || "♥", x, y);
    context.textBaseline = "alphabetic";
  }
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
  if (!complete.length) return t("reflectionBlank");
  const strongest = [...complete].sort((a, b) => b.score - a.score)[0];
  const weakest = [...complete].sort((a, b) => a.score - b.score)[0];
  const strongestName = localizeCategory(strongest.name);
  const weakestName = localizeCategory(weakest.name);
  if (strongest.score - weakest.score < 10) return t("reflectionEven").replace("{name}", escapeHtml(belovedName));
  if (weakest.score < 50) return t("reflectionLow").replace("{strong}", strongestName).replace("{weak}", weakestName);
  return t("reflectionHigh").replace("{strong}", strongestName);
}

function reset() {
  answers.fill(null);
  personalityAnswers = [];
  personalityProfile = null;
  wellnessAnswers = [];
  personalityMode = false;
  wellnessMode = false;
  current = -1;
  userName = "";
  belovedName = "";
  photos.user = null;
  photos.beloved = null;
  photos.couple = null;
  screen = "start";
  stepLabel.textContent = language === "bn" ? "আপনার প্রশ্নগুলো" : "YOUR QUESTIONS";
  progressLabel.textContent = t("ready");
  fill.style.width = "0";
  content.innerHTML = `<div class="start-state"><div class="big-heart quiz-mascot" aria-hidden="true"><img src="bulbuli-pair.png" alt="" /></div><h2 id="start-title">${t("startTitle")}</h2><p id="start-copy">${t("startCopy")}</p><button class="primary-button" id="start-button">${t("startButton")} <span>→</span></button><button class="secondary-button personality-start" id="personality-start-button" type="button">${language === "bn" ? "ব্যক্তিত্ব কুইজ" : "Personality Quiz"} <span>→</span></button><button class="secondary-button personality-start wellness-start" id="wellness-start-button" type="button">${language === "bn" ? "স্বাস্থ্য কুইজ" : "Health Quiz"} <span>→</span></button></div>`;
  document.querySelector("#start-button").addEventListener("click", renderNameForm);
  document.querySelector("#personality-start-button").addEventListener("click", () => {
    personalityMode = true;
    wellnessMode = false;
    personalityAnswers = [];
    personalityProfile = null;
    renderNameForm();
  });
  document.querySelector("#wellness-start-button").addEventListener("click", () => {
    personalityMode = false;
    wellnessMode = true;
    wellnessAnswers = [];
    renderNameForm();
  });
}
