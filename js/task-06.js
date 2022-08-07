const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute('data-length'))
  ) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
  if (
    event.currentTarget.value.length !==
    Number(inputEl.getAttribute('data-length'))
  ) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
  if (event.currentTarget.value === '') {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  }
});
