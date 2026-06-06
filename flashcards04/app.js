let cards = [];
let index = 0;

// カードを表示（常に表の内容を描画）
function showCard() {
  const card = cards[index];

  const front = document.querySelector('.card-front');
  const back = document.querySelector('.card-back');

  front.innerHTML = `<div>${card.front}</div>`;

back.innerHTML = `
  <div class="back-fr">${card.back}</div>
  <div class="kana-text">${card.kana || ""}</div>
  <div class="jp-text">${card.example || ""}</div>
  ${card.audio ? `<button id="play-audio" class="audio-btn">🔊 音声を再生</button>` : ""}
`;


  if (card.audio) {
    const btn = document.getElementById('play-audio');

    // 音声ボタンがカード操作に干渉しないようにする
    ["click", "touchstart", "touchend"].forEach(ev => {
      btn.addEventListener(ev, (event) => {
        event.stopPropagation();
      });
    });

    btn.addEventListener("click", () => {
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

// ★ スワイプ関連コードは完全に削除 ★

// JSON 読み込み
fetch("cards.json")
  .then(response => response.json())
  .then(data => {
    cards = data;
    showCard();
  });

document.getElementById("card").style.touchAction = "none";
