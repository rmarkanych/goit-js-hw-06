const textInput = document.querySelector('#validation-input');
const inputLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === Number(inputLength)) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else if (textInput.value.length === 0) {
    textInput.classList.remove('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
});
