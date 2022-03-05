const refs = {
  firstDiv: document.querySelector('#controls'),
  number: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let userNumber = refs.number.value;
  let firstElementSize = 30;
  let arrayElements = [];

  for (let i = 0; i < userNumber; i += 1) {
    const newElementDiv = document.createElement('div');
    newElementDiv.classList.add('div-boxes');
    newElementDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    newElementDiv.style.width = `${firstElementSize + i * 10}px`;
    newElementDiv.style.height = `${firstElementSize + i * 10}px`;
    arrayElements.push(newElementDiv);
  }
  return refs.boxes.append(...arrayElements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
