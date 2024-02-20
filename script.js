
document.querySelector('form section').addEventListener('input',e=>{
  e.stopPropagation();
  if (e.target.name === 'password' || e.target.name === 'confirmPassword'){
    console.log(e.target.name);
  }
})