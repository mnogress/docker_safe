let cards = [];
let index = 0;

// カードを表示（常に表の内容を描画）
function showCard() {
  const card = cards[index];

  const front = document.querySelector('.card-front');
  const back = document.querySelector('.card-back');

  front.innerHTML = `<div>${card.front}</div>`;

  back.innerHTML = `
    <div style="font-size:1.6rem; text-align:center;">${card.back}</div>
    <div style="margin-top:8px; padding:6px 0; font-size:1.1rem; color:#557;
      text-align:center; border-top:1px solid #ddd; border-bottom:1px solid #ddd;">
      ${card.kana || ""}
    </div>
    <div style="margin-top:12px; font-size:0.9rem; text-align:center;">
      ${card.example || ""}
    </div>
    ${card.audio ? `<button id="play-audio" style="margin-top:15px; padding:8px 16px;">🔊 音声を再生</button>` : ""}
  `;

  if (card.audio) {
    document.getElementById('play-audio').addEventListener('click', () => {
      new Audio(card.audio).play();
    });
  }
}

// flip を完全リセット
function resetFlip() {
  document.querySelector('.card-inner').classList.remove('is-flipped');
}

// 次へ
function nextCard() {
  index = (index + 1) % cards.length;
  resetFlip();
  showCard();
}

// 前へ
function prevCard() {
  index = (index - 1 + cards.length) % cards.length;
  resetFlip();
  showCard();
}

// シャッフル
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

document.getElementById("shuffleBtn").addEventListener("click", () => {
  shuffleCards();
  index = 0;
  resetFlip();
  showCard();
});

// 裏返すボタン
document.getElementById("turnBtn").addEventListener("click", () => {
  const inner = document.querySelector('.card-inner');

  inner.classList.add('float');
  setTimeout(() => inner.classList.remove('float'), 250);

  inner.classList.toggle('is-flipped');
});

// ← ボタン
document.getElementById("prevBtn").addEventListener("click", () => {
  prevCard();
});

// → ボタン
document.getElementById("nextBtn").addEventListener("click", () => {
  nextCard();
});

// スワイプ（左右のみ）
let startX = 0;

document.getElementById("card").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.getElementById("card").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  const inner = document.querySelector('.card-inner');
  inner.classList.add('float');
  setTimeout(() => inner.classList.remove('float'), 250);

  if (diffX > 40) {
    prevCard();
  } else if (diffX < -40) {
    nextCard();
  }
});

// JSON 読み込み
fetch("cards.json")
  .then(response => response.json())
  .then(data => {
    cards = data;
    showCard();
  });
