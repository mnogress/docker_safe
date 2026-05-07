let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

const cardElement = document.getElementById('card');

cardElement.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].screenX;
  startY = e.changedTouches[0].screenY;
});

cardElement.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].screenX;
  endY = e.changedTouches[0].screenY;
  handleSwipe();
});


fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    cards = shuffleArray(data);  // ← シャッフルして格納
    showCard();
  });

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function handleSwipe() {
  const diffX = endX - startX;
  const diffY = endY - startY;

  // 横方向のスワイプ（表裏）
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
    // 縦方向のスワイプ（カード移動）
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

