const controls = document.querySelector('#controls');
const inputValue = document.querySelector('input[type="number"]');
const btnCreate = controls.querySelector('button[data-create]');
const btnDestroy = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let divWidth = 30;
let divHeight = 30;
let step = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreate.addEventListener('click', createBoxes);

function createBoxes() {
  destroyBoxes();
  for (let i = 1; i <= inputValue.value; i++) {
    boxes.insertAdjacentHTML(
      'beforeend',
      `<div class="div-create" style="
      background-color:${getRandomHexColor()};
          width:${(divWidth += step)}px;
          height:${(divHeight += step)}px"
      ></div>`
    );
  }
  inputValue.value = '';
}

btnDestroy.addEventListener('click', () => {
  inputValue.value = '';
  destroyBoxes();
});

function destroyBoxes() {
  boxes.textContent = '';
  divWidth = 20;
  divHeight = 20;
}
