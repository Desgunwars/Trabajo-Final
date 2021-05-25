'use strict'
const express = require('@awaitjs/express');
const controllers = require('./controllerAdmin');
const router = express.Router();

router.postAsync('/singupAdmin', controllers.singUpAdmin);

module.exports = router;