const inputEl = document.querySelector('#validation-input');
const inputDataLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onChangeColorofBlur);

function onChangeColorofBlur(event) {
  inputEl.classList.add('invalid');

  if (event.currentTarget.value.length === Number(inputDataLength)) {
    inputEl.classList.replace('invalid', 'valid');
  } else {
    inputEl.classList.replace('valid', 'invalid');
  }
}
