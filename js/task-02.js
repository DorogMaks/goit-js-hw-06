const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredientsList = ingredientsArray => {
  return ingredientsArray.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.textContent = ingredient;
    listEl.classList.add('item');

    return listEl;
  });
};

ingredientsList.append(...createIngredientsList(ingredients));
