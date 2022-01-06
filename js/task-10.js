const refs = {
  firstDiv: document.querySelector('#controls'),
  number: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

const newElements = [];

// refs.number.addEventListener('input', element => {
//   console.log(element.currentTarget.value);
// });

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const elements = document.createElement('div');
    elements.classList.add('div_boxes');
    elements.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    newElements.push(elements);
  }
}

console.log(newElements);

// createBoxes(
//   refs.number.addEventListener('input', element => {
//     console.log(element.currentTarget.value);
//   }),
// );

createBoxes(11);

// const readyBoxes = createBoxes(
//   refs.number.addEventListener('input', element => {
//     console.log(element.currentTarget.value);
//   }),
// );
// console.log(readyBoxes);

refs.boxes.append(...newElements);

// Принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.

function destroyBoxes() {
  boxes.innerHTML = '';
}
