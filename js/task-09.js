const refs = {
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
  divEl: document.querySelector('.widget'),
  // body: document.querySelector('body'),
};

refs.buttonEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  refs.divEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.textEl.textContent = refs.divEl.style.backgroundColor;
}
