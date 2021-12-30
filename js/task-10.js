const refs = {
  firstDiv: document.querySelector('#controls'),
  number: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const newElements = [];

function createBoxes(amount) {
  const elements = document.createElement('div');
  console.log(elements);
  newElements.push(elements);
  // Принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
  // Размеры самого первого <div> - 30px на 30px.
  // Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
  // Все элементы должены иметь случайный цвет фона в формате HEX.
}

refs.boxes.append(...newElements);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {}
