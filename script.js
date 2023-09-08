

const formOpenBtn = document.querySelector('#form-open'),
home = document.querySelector('.home'),
formcontent = document.querySelector('.form-content'),
closeform = document.querySelector('.close-form'),
signupBtn = document.querySelector('.signup'),
loginBtn = document.querySelector('.login');


formOpenBtn.addEventListener("click", () => home.classList.add("show"));
closeform.addEventListener("click", () => home.classList.remove("show"));


signupBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formcontent.classList.add("active");
});

loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    formcontent.classList.remove("active");
});