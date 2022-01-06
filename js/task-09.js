const refs = {
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.textEl.textContent = document.body.style.backgroundColor;
}
