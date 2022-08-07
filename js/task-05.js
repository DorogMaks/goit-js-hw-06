const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  if (inputEl.value === '') return (outputEl.textContent = 'Anonymous');
  outputEl.textContent = event.currentTarget.value;
});
