// ===============================
// Sentence Data
// ===============================
const sentences = [
  { en: "I like to read books.", th: "ฉันชอบอ่านหนังสือ" },
  { en: "She plays the piano.", th: "เธอเล่นเปียโน" },
  { en: "Where is the station?", th: "สถานีอยู่ที่ไหน?" },
  { en: "Can you help me?", th: "คุณช่วยฉันได้ไหม?" },
  { en: "It is sunny today.", th: "วันนี้แดดออก" },
  { en: "I drink coffee every morning.", th: "ฉันดื่มกาแฟทุกเช้า" }
];

// ===============================
// DOM Elements
// ===============================
const card = document.getElementById("flashcard");
const englishText = document.getElementById("english-text");
const thaiText = document.getElementById("thai-text");
const nextBtn = document.getElementById("next-btn");

let currentSentence = null;

// ===============================
// Functions
// ===============================
function getRandomSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

function loadRandomSentence() {
  currentSentence = getRandomSentence();
  englishText.textContent = currentSentence.en;
  thaiText.textContent = currentSentence.th;
}

// ===============================
// Event Listeners
// ===============================
card.addEventListener("click", () => {
  card.classList.toggle("is-flipped");
});

nextBtn.addEventListener("click", () => {
  if (card.classList.contains("is-flipped")) {
    card.classList.remove("is-flipped");
    setTimeout(loadRandomSentence, 300);
  } else {
    loadRandomSentence();
  }
});

// ===============================
// Init
// ===============================
loadRandomSentence();

