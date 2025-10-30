const container = document.querySelector('.container');
const signInBtn = document.querySelector('.signIn-btn');
const signUpBth = document.querySelector('.signUp-btn');

signInBtn.addEventListener('click', () => {
    container.classList.add('active');
})

signUpBth.addEventListener('click', () => {
    container.classList.remove('active');
})