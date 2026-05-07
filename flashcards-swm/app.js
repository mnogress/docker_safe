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
  const text = showingFront ? card.front : card.back;
  document.getElementById('card').textContent = text;

  // 表面はフランス語、裏面は日本語
  if (showingFront) {
    speak(text, 'fr-FR');
  } else {
    speak(text, 'ja-JP');
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
