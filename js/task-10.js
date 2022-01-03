const refs = {
  firstDiv: document.querySelector('#controls'),
  number: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

// const newElements = [];

function createBoxes(amount) {
  refs.number.addEventListener('input', element => {
    console.log(element.currentTarget.value);
  });

  const elements = document.createElement('div');
  elements.classList.add('div_boxes');
  elements.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  refs.boxes.append(elements);

  // for (let i = 1; i <= amount; i += 1) {}
}

// Принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

function destroyBoxes() {
  boxes.innerHTML = '';
}
