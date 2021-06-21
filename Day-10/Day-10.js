const cards = document.querySelectorAll('.Card');
cards.forEach(card => card.addEventListener('click', flipCard));

function match() {
  let isMatch = fst.dataset.name === snd.dataset.name;

  isMatch ? disableCards() : unflipCards();
}
function flipCard() {
  if (lock) return;
  if (this === fst) return;

  this.classList.add('flip');

  if (!flipped) {
    flipped = 1;
    fst = this;

    return;
  }

  snd = this;
  match();
}

function disableCards() {
  fst.removeEventListener('click', flipCard);
  snd.removeEventListener('click', flipCard);

  resetBoard();
}
function unflipCards() {
  lock = 1;

  setTimeout(() => {
    fst.classList.remove('flip');
    snd.classList.remove('flip');

    resetBoard();
  }, 1500);
}
