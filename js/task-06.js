const inputEl = document.querySelector('#validation-input');
const inputDataLength = inputEl.getAttribute('data-length');
// console.log('inputDataLength', inputDataLength);

inputEl.addEventListener('blur', onChangeColorofBlur);

function onChangeColorofBlur(event) {
  console.log('Кол-во символов:', event.currentTarget.value.length);
  inputEl.classList.add('valid');

  if (event.currentTarget.value.length <= inputDataLength) {
    console.log(event.currentTarget);
    inputEl.classList.replace('invalid', 'valid');
  } else {
    console.log(event.currentTarget);
    inputEl.classList.replace('valid', 'invalid');
  }
}
