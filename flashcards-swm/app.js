let cards = [];
let index = 0;
let showingFront = true;
let startX = 0;
let endX = 0;

const cardElement = document.getElementById('card');

cardElement.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].screenX;
});

cardElement.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].screenX;
  handleSwipe();
});


fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    cards = data;
    showCard();
  });

function handleSwipe() {
  const diff = endX - startX;

  // 右スワイプ（裏面へ）
  if (diff > 50) {
    if (showingFront) {
      showingFront = false;
      showCard();
    }
  }

  // 左スワイプ（表面へ）
  if (diff < -50) {
    if (!showingFront) {
      showingFront = true;
      showCard();
    }
  }
}


function showCard() {
  const card = cards[index];

  if (showingFront) {
    // 表面：単語だけ
    document.getElementById('card').innerHTML = `
      <div>${card.front}</div>
    `;
  } else {
    // 裏面：日本語訳＋例文＋音声ボタン
    document.getElementById('card').innerHTML = `
      <div>${card.back}</div>
      <div style="margin-top:10px; font-size:0.9em;">${card.example || ""}</div>
      <button id="play-audio" style="margin-top:15px; padding:8px 16px; font-size:1em;">
        🔊 音声を再生
      </button>
    `;

    // ボタンにイベントを付与
    document.getElementById('play-audio').addEventListener('click', () => {
      if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play();
      }
    });
  }
}




// Next ボタンで次のカードへ
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showingFront = true; // 新しいカードは表面から
  showCard();
});
