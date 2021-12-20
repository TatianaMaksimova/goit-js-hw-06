const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('ul');
// console.log(ingredientsListEl);

// const addForIngredientsEl = ingredients.forEach(ingredient => {
//   const ingredientsEl = document.createElement('li');
//   ingredientsEl.classList.add('item');
//   ingredientsEl.textContent = ingredient;

//   // console.log(ingredientsEl);
//   // return ingredientsEl;

//   ingredientsListEl.append(ingredientsEl);
// });

ingredients.forEach(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingredient;

  ingredientsListEl.append(ingredientsEl);
});
