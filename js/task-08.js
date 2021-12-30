const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = new FormData(event.currentTarget);

  const dataArray = {
    email: email.value,
    password: password.value,
  };
  console.log(dataArray);

  event.currentTarget.reset();
}
