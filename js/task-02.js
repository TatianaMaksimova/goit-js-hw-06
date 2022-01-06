const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('ul');

const createLiElements = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.classList.add('item');
    ingredientsEl.textContent = ingredient;
    return ingredientsEl;
  });
};

const elements = createLiElements(ingredients);

ingredientsListEl.append(...elements);
