const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsUl = document.querySelector('#ingredients');

const arr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  let item = ingredients[i];
  const ingridientLi = document.createElement('li');
  ingridientLi.classList.add('item');
  ingridientLi.textContent = item;
  arr.push(ingridientLi);
}

ingredientsUl.append(...arr);
