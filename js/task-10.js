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

  for (let i = 1; i <= userNumber; i += 1) {
    const newElementDiv = document.createElement('div');
    newElementDiv.classList.add('div_boxes');
    newElementDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    newElementDiv.style.width = '30px';
    newElementDiv.style.height = '30px';

    console.log(newElementDiv.style.width);
    console.log(newElementDiv.style.height);

    refs.boxes.append(newElementDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
