const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);

const categoriesName = document.querySelectorAll('li.item h2');
const categoriesUl = document.querySelectorAll('li.item ul');
categoriesName.forEach(name => console.log(`Category: ${name.textContent}`));
