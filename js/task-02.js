const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsUl = document.querySelector('#ingredients');

const element = ingredients.map(ingredient => {
  const ingridientLi = document.createElement('li');
  ingridientLi.classList.add('item');
  ingridientLi.textContent = ingredient;
  return ingridientLi;
});

ingredientsUl.append(...element);
