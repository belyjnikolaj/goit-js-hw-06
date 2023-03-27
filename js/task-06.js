const validationInput = document.querySelector('#validation-input');

const checkInput = () => {
  const inputValue = validationInput.value;
  const inputLength = Number(validationInput.getAttribute('data-length'));

    if (inputValue.length === inputLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
    }
};

validationInput.addEventListener('blur', checkInput);
