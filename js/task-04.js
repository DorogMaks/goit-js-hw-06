let counterValue = 0;

const counterDisplayValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', decrementClick);
incrementBtn.addEventListener('click', incrementClick);

function decrementClick() {
  counterValue -= 1;
  counterDisplayValue.textContent = counterValue;
}
function incrementClick() {
  counterValue += 1;
  counterDisplayValue.textContent = counterValue;
}

// const counterValue = document.querySelector('#value');
// counterValue.textContent = 0;

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// const decrementClick = () => (counterValue.textContent -= 1);
// const incrementClick = () =>
//   (counterValue.textContent = Number(counterValue.textContent) + 1);

// decrementBtn.addEventListener('click', decrementClick);
// incrementBtn.addEventListener('click', incrementClick);
