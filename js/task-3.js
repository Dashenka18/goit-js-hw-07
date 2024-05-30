const inputName = document.querySelector('#name-input');
console.log(inputName);
const spanName = document.querySelector('#name-output');
console.log(spanName); 


inputName.addEventListener('input', foo => {
    if (inputName.value.trim() === ''){
        return spanName.textContent = 'Anonymous';
    } else {
        return spanName.textContent = inputName.value;
    }
 });