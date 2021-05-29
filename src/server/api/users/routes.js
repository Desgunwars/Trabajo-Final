const express = require('@awaitjs/express');
const controller = require('./controller');
const auth = require('../../middleware/auth');
const router = express.Router();

router.postAsync('/signin', controller.User);
router.postAsync('/singup', controller.createUser);


module.exports = router; 

