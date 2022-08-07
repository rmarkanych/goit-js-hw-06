const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  const result = {
    Пошта: email.value,
    Пароль: password.value,
  };
  console.log(result);
  event.currentTarget.reset();
}
