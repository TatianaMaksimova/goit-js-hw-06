let counterValue = 0;

const buttonDecrEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

buttonDecrEl.addEventListener('click', () => {
  valueEl.innerHTML = counterValue -= 1;
});

buttonIncrEl.addEventListener('click', () => {
  valueEl.innerHTML = counterValue += 1;
});
