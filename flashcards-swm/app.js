let cards = [];
let index = 0;
let showingFront = true;

fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    cards = data;
    showCard();
  });

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




// カードをタップすると裏返る
document.getElementById('card').addEventListener('click', () => {
  showingFront = !showingFront;
  showCard();
});

// Next ボタンで次のカードへ
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showingFront = true; // 新しいカードは表面から
  showCard();
});
