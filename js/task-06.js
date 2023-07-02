const validationInput = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length="6"]');
const inputEl = document.querySelector('input');

validationInput.addEventListener('blur', () => {
    if (validationInput.ariaValueMax.length === Number(inputLength)) {
        validationInput.classList.remove('invalid');
}
    else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
}
});