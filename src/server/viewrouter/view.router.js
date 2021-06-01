const express = require('express');
const router = express.Router();
const {login,adminPanel} = require('../controller/homeController');
const fetch = require('node-fetch');


router.get('/login', login);


router.post('/admin/admin/adminIn' ,(req, res) => {
    console.log(true);
});


function peticion(){
    const name = document.getElementById("email").value;
    const passwd = document.getElementById("passwd").value;
    const body = {
        email: name,
        passwd : passwd
    }
    fetch('/admin/admin/adminIn', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => console.log(true))
    .catch(err => console.log(false))

}


module.exports = router;