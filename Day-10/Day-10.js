const cards = document.querySelectorAll('.Card');
cards.forEach(card => card.addEventListener('click', flipCard));

function match() {
  let isMatch = fst.dataset.name === snd.dataset.name;

  isMatch ? disableCards() : unflipCards();
}
