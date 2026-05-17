let cards = [];
let index = 0;

// カードを表示（常に表の内容を描画）
function showCard() {
  const card = cards[index];

  const front = document.querySelector('.card-front');
  const back = document.querySelector('.card-back');

  // 表面
  front.innerHTML = `<div>${card.front}</div>`;

  // 裏面
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

// flip 状態を完全リセット（スワイプ・シャッフル時に必須）
function resetFlip() {
  const inner = document.querySelector('.card-inner');
  inner.classList.remove('is-flipped');
}

// 次のカード
function nextCard() {
  index = (index + 1) % cards.length;
  resetFlip();   // ★ flip を必ずリセット
  showCard();    // ★ 表の内容を描画
}

// 前のカード
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

  // 浮くアニメーション
  inner.classList.add('float');
  setTimeout(() => inner.classList.remove('float'), 250);

  // 裏返す
  inner.classList.toggle('is-flipped');
});

// スワイプ処理
let startX = 0;
let startY = 0;

document.getElementById("card").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.getElementById("card").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;

  const diffX = endX - startX;
  const diffY = endY - startY;

  const inner = document.querySelector('.card-inner');

  // 浮くアニメーション
  inner.classList.add('float');
  setTimeout(() => inner.classList.remove('float'), 250);

  // 上下スワイプ → 裏返す
  if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 40) {
    inner.classList.toggle('is-flipped');
    return;
  }

  // 左右スワイプ → カード移動
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
