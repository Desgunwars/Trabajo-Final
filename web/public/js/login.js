'use strict'
const formLogin = document.querySelector('#form');
const formData = new FormData(formLogin);
// console.log(formData);

formLogin.addEventListener('submit', event => {
    event.preventDefault();
    fetch('/login',{
        method: 'POST',
        body: formData
    }).then((res) => {
        console.log(res);
    });
}); 