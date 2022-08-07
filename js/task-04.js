const value = document.querySelector('#value');
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

function changeValue(event) {
  if (event.currentTarget === decrement) {
    counterValue++;
    value.textContent = counterValue;
  } else if (event.currentTarget === increment) {
    counterValue--;
    value.textContent = counterValue;
  }
}

increment.addEventListener('click', changeValue);

decrement.addEventListener('click', changeValue);
