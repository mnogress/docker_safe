let cards = [];
let index = 0;
let showingFront = true;

// スワイプ判定用
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

const cardElement = document.getElementById('card');

// スワイプ開始
cardElement.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].screenX;
  startY = e.changedTouches[0].screenY;
});

// スワイプ終了
cardElement.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].screenX;
  endY = e.changedTouches[0].screenY;
  handleSwipe();
});

// JSON 読み込み
fetch('cards.json?v=1')
  .then(res => res.json())
  .then(data => {
    cards = shuffleArray(data);  // シャッフル
    showCard();
  });

// シャッフル関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ★★★ 横スワイプだけにした handleSwipe ★★★
function handleSwipe() {
  const diffX = endX - startX;

  if (Math.abs(diffX) > 25) {

    // 右スワイプ → 前のカード
    if (diffX > 0) {
      cardElement.classList.add('swipe-right');
      setTimeout(() => {
        prevCard();
        cardElement.classList.remove('swipe-right');
      }, 200);
    }

    // 左スワイプ → 次のカード
    if (diffX < 0) {
      cardElement.classList.add('swipe-left');
      setTimeout(() => {
        nextCard();
        cardElement.classList.remove('swipe-left');
      }, 200);
    }
  }
}

// カード表示
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
    <button id="play-audio" style="margin-top:15px; padding:8px 16px;">
      🔊 音声を再生
    </button>
  `;

  if (card.audio) {
    document.getElementById('play-audio').addEventListener('click', () => {
      new Audio(card.audio).play();
    });
  }

  // フリップ状態を反映
  const inner = document.querySelector('.card-inner');
  if (showingFront) {
    inner.classList.remove('is-flipped');
  } else {
    inner.classList.add('is-flipped');
  }
}


// 次のカード
function nextCard() {
  index = (index + 1) % cards.length;
  showingFront = true;
  showCard();
}

// 前のカード
function prevCard() {
  index = (index - 1 + cards.length) % cards.length;
  showingFront = true;
  showCard();
}

// turn-over ボタン
document.getElementById("turnBtn").addEventListener("click", () => {
  const inner = document.querySelector('.card-inner');

  // 浮く
  inner.classList.add('float');

  // 200ms 後に元に戻す
  setTimeout(() => {
    inner.classList.remove('float');
  }, 250);

  // 裏返し処理
  showingFront = !showingFront;
  showCard();
});

// シャッフルボタン
function shuffleCards() {
  cards = shuffleArray(cards);
}

document.getElementById("shuffleBtn").addEventListener("click", () => {
  shuffleCards();
  index = 0;
  showingFront = true;
  showCard();
});
