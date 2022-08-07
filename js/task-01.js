const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach(name => {
  console.log(`Category: ${name.firstElementChild.textContent}`);
  console.log(`Category: ${name.lastElementChild.children.length}`);
});
