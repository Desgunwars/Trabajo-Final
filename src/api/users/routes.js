const express = require('@awaitjs/express');
const controller = require('./controller');
const auth = require('../../middleware/auth');
const router = express.Router();

router.getAsync('/user', auth.isAuth,controller.User);
router.postAsync('/saveUser', controller.createUser);


module.exports = router; 