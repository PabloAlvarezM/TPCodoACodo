const EmailInput = document.querySelector('#Email');

const EmailValidate = document.querySelector('#EmailOk');

EmailInput.addEventListener('input', function () {
    if(this.value.includes("@")){
        EmailValidate.innerText = "Email valido";
        }
    else{
        EmailValidate.innerText = "Ingrese un Email valido";
         }
});