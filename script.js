const badPasswordMsgElement = document.querySelector('.badPasswordMsg');
const passwordElement = document.querySelector(`input[name='password']`);
const confirmPasswordElement = document.querySelector(`input[name='confirmPassword']`);
let pass1, pass2;

const checkPasswordsAndSetStyles = (pass1,pass2)=>{
  //handle when pass1 is an empty string leading to wrongly adding errors:
  pass1 = pass1 === '' ? undefined : pass1;
  pass2 = pass2 === '' ? undefined : pass2;
  if (pass1 !== pass2 ){
    badPasswordMsgElement.classList.remove('hideBadPassMsg'); //remove class to show badPasswordMsgElement
    passwordElement.classList.add('error'); //enable class to border red
    confirmPasswordElement.classList.add('error');
  } else if (pass1 === pass2 ){
    badPasswordMsgElement.classList.add('hideBadPassMsg');//add class to hide basPasswordMsgElement
    confirmPasswordElement.classList.remove('error'); //remove class to clear red border
    passwordElement.classList.remove('error'); 
  }
}

document.querySelector('form section').addEventListener('input',e=> {
  e.stopPropagation();
  const elem = e.target;
  switch (elem.name) {
    case 'password':
      pass1 = elem.value;
      break;
    case 'confirmPassword':    
      pass2 = elem.value;
  }
  checkPasswordsAndSetStyles(pass1,pass2);
});
