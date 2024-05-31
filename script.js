'use strict'

let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

console.log(form);

form.addEventListener('submit',e=>{
  e.preventDefault()
  checkInput();
});

function checkInput(){
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();
  console.log(password2Val);

  


  if (usernameVal === '') {
    setError(username,'Username Cannot Be Empty')
  }
  else{
    setSuccess(username)
  }


  if (emailVal === '') {
    setError(email,'Email Cannot Be empty')
  }
  else if(!isEmail(emailVal)){
    setError(email,'Not a Valid Email')
  }
  else{
    setSuccess(email)
  }

  

  if(passwordVal === ''){
    setError(password,'Password Cannot Be Empty')
  }
  else{
    setSuccess(password)
  }

  if (password2Val=== '') {
    setError(password2,'Password2 Cannot Be empty')
  }
  else if(passwordVal !== password2Val){
    setError(password2,'Password Does not Match')
  }
  else{
    setSuccess(password2)
  }

}

function setError(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small")
  formControl.className = 'form-control error'
  small.innerText = message;

}

function setSuccess(input){
  const formControl = input.parentElement;
  formControl.className='form-control success'
}

function isEmail(email) {
  return /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/.test(email)
  
}
