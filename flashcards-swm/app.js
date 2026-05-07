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
fetch('cards.json')
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

// スワイプ処理
function handleSwipe() {
  const diffX = endX - startX;
  const diffY = endY - startY;

  // 横スワイプ（表裏）
  if (Math.abs(diffX) > Math.abs(diffY)) {

    // 右スワイプ → 裏面
    if (diffX > 50 && showingFront) {
      showingFront = false;
      showCard();
    }

    // 左スワイプ → 表面
    if (diffX < -50 && !showingFront) {
      showingFront = true;
      showCard();
    }

  } else {
    // 縦スワイプ（カード移動）

    // 上スワイプ → 次のカード
    if (diffY < -50) {
      nextCard();
    }

    // 下スワイプ → 前のカード
    if (diffY > 50) {
      prevCard();
    }
  }
}

// カード表示
function showCard() {
  const card = cards[index];

  if (showingFront) {
    // 表面
    cardElement.innerHTML = `
      <div>${card.front}</div>
    `;
  } else {
    // 裏面（音声ボタン付き）
    cardElement.innerHTML = `
      <div>${card.back}</div>
      <div style="margin-top:10px; font-size:0.9em;">${card.example || ""}</div>
      <button id="play-audio" style="margin-top:15px; padding:8px 16px; font-size:1em;">
        🔊 音声を再生
      </button>
    `;

    // 音声ボタン
    document.getElementById('play-audio').addEventListener('click', () => {
      if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play();
      }
    });
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

// Next ボタン（任意）
document.getElementById('next').addEventListener('click', nextCard);
