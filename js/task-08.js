const form = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All fields must be filled!');
  }

  const userDetails = { Email: email.value, Password: password.value };

  console.log(userDetails);

  event.currentTarget.reset();
};

form.addEventListener('submit', handleSubmit);
