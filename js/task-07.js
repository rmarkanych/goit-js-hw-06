const input = document.querySelector('#font-size-control');
const mainText = document.querySelector('#text');

input.addEventListener('change', changeSize);

function changeSize() {
  mainText.style.fontSize = `${input.value}px`;
}
