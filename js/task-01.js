const categoryTitleEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoryTitleEl.length);

// const titleElement = document.querySelector('h2');
// console.log(`Category: ${titleElement.textContent}`);

// const elQuan = titleElement.nextElementSibling.children;
// console.log(`Elements: ${elQuan.length}`);

const eachCategoryAndTheySiblingEl = document.querySelectorAll('h2').forEach((element, index) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
