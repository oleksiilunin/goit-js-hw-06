const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const ingrItems = ingredients.map((ingr) => {

  const ingrItem = document.createElement('li');

  ingrItem.textContent = ingr;
  ingrItem.classList.add('item');

  return ingrItem;
});

listIngredients.append(...ingrItems);