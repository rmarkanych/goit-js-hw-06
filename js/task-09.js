const btn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener('click', onClickBtnChangeColor);

function onClickBtnChangeColor() {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;
}
