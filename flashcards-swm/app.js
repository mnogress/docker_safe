let cards = [];
let index = 0;

fetch('cards.json')
  .then(res => res.json())
  .then(data => {
    cards = data;
    showCard();
  });

function showCard() {
  document.getElementById('card').textContent = cards[index].front;
}

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showCard();
});
