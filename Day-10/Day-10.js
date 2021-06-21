const cards = document.querySelectorAll('.Card');
cards.forEach(card => card.addEventListener('click', flipCard));

let flipped = 0;
let lock = 0;
let fst, snd;

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

function match() {
  let isMatch = fst.dataset.name === snd.dataset.name;

  isMatch ? disableCards() : unflipCards();
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

function resetBoard() {
  [flipped, lock] = [0, 0];
  [fst, snd] = [null, null];
}
