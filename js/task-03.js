const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const addMarkupForImages = images.forEach(image => {
  return galleryEl.insertAdjacentHTML(
    'afterbegin',
    `<li><img src="${image.url}" alt="${image.alt}" width="300px"></li>`,
    `<li><img src="${image.url}" alt="${image.alt}" width="300px"></li>`,
    `<li><img src="${image.url}" alt="${image.alt}" width="300px"></li>`,
  );
});

// В задании 3 вам нужно сперва с помощью перебирающего метода массива создать массив шаблонных строк, явдяющих собою разметку для каждого тега ли, затем эти шаблонные строки объеденить в одну большую строку и вставить в разметку (за пределами перебирающего метода массива).
