let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');



signInBtn.addEventListener('click',()=>{
    nameField.computedStyleMap.maxHeight ='0';
    title.innerHTML ="sign In";
    signUpBtn.classList.add('disable');
    signInBtn.classList.add('disable');
});