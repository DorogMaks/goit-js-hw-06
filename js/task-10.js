function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls').firstElementChild;
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxesToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${30 + 10 * i}px`;
    boxEl.style.height = `${30 + 10 * i}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesToAdd.push(boxEl);
  }
  return boxesToAdd;
}

createBtn.addEventListener('click', () => {
  boxesEl.append(...createBoxes(inputEl.value));
});

destroyBtn.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});
