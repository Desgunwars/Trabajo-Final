'use strict'
const express = require('@awaitjs/express');
const router = express.Router();
const controller = require('./controller');
const auth = require('../../middleware/auth');


router.postAsync('/adminUp', controller.singUpAdmin);
router.postAsync('/adminIn',controller.singInAdmin);

module.exports = router;

// , auth.isAuth