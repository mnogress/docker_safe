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
    // 表面：単語
    document.getElementById('card').textContent = card.front;

    // 音声再生
    if (card.audio) {
      const audio = new Audio(card.audio);
      audio.play();
    }

  } else {
    // 裏面：日本語訳＋例文
    document.getElementById('card').innerHTML =
      `<div>${card.back}</div><div style="margin-top:10px; font-size:0.9em;">${card.example}</div>`;
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
