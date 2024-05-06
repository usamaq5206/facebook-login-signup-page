let singUpBtn = document.querySelector(".new-account");
let singPopUp = document.querySelector(".signup-popup");
let closeForm = document.querySelector("#form-closed");
singUpBtn.addEventListener('click',function(){
    singPopUp.classList.add('show');
})
closeForm.addEventListener('click',function(){
    singPopUp.classList.remove('show');
})