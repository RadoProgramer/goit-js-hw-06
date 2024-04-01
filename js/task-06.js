const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const desiredLength = parseInt(validationInput.dataset.length);
  const inputValueLength = validationInput.value.length;

  if (inputValueLength === desiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
