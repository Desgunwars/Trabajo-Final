const express = require('express');
const router = express.Router();
const {login,adminPanel} = require('../controller/homeController');
const http = require('http');


router.get('/login', login);





module.exports = router;