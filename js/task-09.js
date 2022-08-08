function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const magicBtn = document.querySelector('.change-color');
const bgColorValue = document.querySelector('.color');

magicBtn.addEventListener('click', () => {
  let colorValue = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValue;
  bgColorValue.textContent = colorValue;
});
