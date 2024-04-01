const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Proszę wypełnić wszystkie pola formularza.');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(formData); 
    loginForm.reset(); 
  }
});
