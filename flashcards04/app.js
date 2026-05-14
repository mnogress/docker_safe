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

// シャッフル関数（修正済み）
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

  // まず横スワイプを優先判定する
  if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {

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

    return; // ← 横スワイプが成立したらここで終了
  }

  // 次に縦スワイプを判定する
  if (Math.abs(diffY) > 40) {

    // 上スワイプ → 裏面へ
    if (diffY < 0 && showingFront) {
      cardElement.classList.add('swipe-up');
      setTimeout(() => {
        showingFront = false;
        showCard();
        cardElement.classList.remove('swipe-up');
      }, 200);
    }

    // 下スワイプ → 表面へ
    if (diffY > 0 && !showingFront) {
      cardElement.classList.add('swipe-down');
      setTimeout(() => {
        showingFront = true;
        showCard();
        cardElement.classList.remove('swipe-down');
      }, 200);
    }
  }
}


// カード表示
function handleSwipe() {
  const diffX = endX - startX;
  const diffY = endY - startY;

  // まず横スワイプを優先判定する
  if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {

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

    return; // ← 横スワイプが成立したらここで終了
  }

  // 次に縦スワイプを判定する
  if (Math.abs(diffY) > 40) {

    // 上スワイプ → 裏面へ
    if (diffY < 0 && showingFront) {
      cardElement.classList.add('swipe-up');
      setTimeout(() => {
        showingFront = false;
        showCard();
        cardElement.classList.remove('swipe-up');
      }, 200);
    }

    // 下スワイプ → 表面へ
    if (diffY > 0 && !showingFront) {
      cardElement.classList.add('swipe-down');
      setTimeout(() => {
        showingFront = true;
        showCard();
        cardElement.classList.remove('swipe-down');
      }, 200);
    }
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

// Next ボタン
document.getElementById('next').addEventListener('click', nextCard);

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
