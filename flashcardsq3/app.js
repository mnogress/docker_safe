let cards = [];
let index = 0;

// カードを表示
function showCard() {
  const card = cards[index];

  const front = document.querySelector('.card-front');
  const back = document.querySelector('.card-back');

  // 表
  front.innerHTML = `<div>${card.front}</div>`;

  // 裏（クラス化）
  back.innerHTML = `
    <div class="back-fr">${card.back}</div>
    <div class="kana-text">${card.kana || ""}</div>
    <div class="jp-text">${card.example || ""}</div>
    ${card.audio ? `<button id="play-audio" class="audio-btn">🔊 音声を再生</button>` : ""}
  `;

  // 音声ボタン
  if (card.audio) {
    const btn = document.getElementById('play-audio');

    ["click","touchstart","touchend"].forEach(ev => {
      btn.addEventListener(ev, e => e.stopPropagation());
    });

    btn.addEventListener("click", () => new Audio(card.audio).play());
  }
}

// 裏返しリセット
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

// 裏返す
document.getElementById("turnBtn").addEventListener("click", () => {
  const inner = document.querySelector('.card-inner');

  inner.classList.add('float');
  setTimeout(() => inner.classList.remove('float'), 250);

  inner.classList.toggle('is-flipped');
});

// ←
document.getElementById("prevBtn").addEventListener("click", prevCard);

// →
document.getElementById("nextBtn").addEventListener("click", nextCard);

// JSON 読み込み
fetch("cards.json")
  .then(response => response.json())
  .then(data => {
    cards = data;
    showCard();
  });

document.getElementById("card").style.touchAction = "none";
