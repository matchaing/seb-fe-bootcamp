const elInputUsername = document.querySelector('#username')
const elFailureMessage = document.querySelector('.failure-message')
const elSuccessMessage = document.querySelector('.success-message')

const elPassword = document.querySelector('#password')
const elPasswordRetype = document.querySelector('#password-retype')
const elMismatchMessage = document.querySelector('.mismatch-message')

const elButtonSignup = document.getElementById('button_signUp')

const elMisMessage = document.querySelector('.mis-message');

let emailForm = false;
let match = false;

elInputUsername.onkeyup = function(){
  elMisMessage.classList.add('hide')
    if(isEmailForm(elInputUsername.value)){
      elFailureMessage.classList.add('hide')
      elSuccessMessage.classList.remove('hide')
      emailForm = true;
    }
    else {
      elSuccessMessage.classList.add('hide')
      elFailureMessage.classList.remove('hide')
      emailForm = false;
    }
  }
  
  elPasswordRetype.onkeyup = function() {
    elMisMessage.classList.add('hide')
    if (isMatch(elPassword.value, elPasswordRetype.value)) {
      elMismatchMessage.classList.add('hide');
      match = true;
    } else {
      elMismatchMessage.classList.remove('hide');
      match = false;
    }
  }

  function isEmailForm(value) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(value);
  }
  
function isMatch (password1, password2) {
    return password1 === password2
}
//flag
function isSignUp (){
    if(emailForm && match){
      window.location.href = 'calculatorPage.html';
    }
    else{
        elMisMessage.classList.remove('hide')
    }
}