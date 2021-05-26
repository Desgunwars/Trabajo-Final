'use struct'
// const express = require('express');
// const asyncify = require('express-asyncify');
// const { endpoint, apiToken } = require('../config/config');
// const api = asyncify(express.Router());
const {routes} = require('../config/headerRoutes')
const {indexView} = require('../controllers/homeController');


routes.get('/login', indexView);

routes.post('/login',(req, res) =>{
    const { email, password } = req.body;
    console.log(email, password);
});




module.exports = {
    routes: routes
};
