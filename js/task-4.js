
const myForm = document.querySelector('.login-form');
 console.log(myForm);


myForm.addEventListener('submit', event => {
    event.preventDefault();

    if(myForm.elements.email.value === '' || myForm.elements.password.value === ''){
         return alert('All form fields must be filled in');
    } else{
        const data = {
            email: myForm.elements.email.value,
            password: myForm.elements.password.value,
        };
            
            
            console.log(data);
            myForm.reset();
    }
    });