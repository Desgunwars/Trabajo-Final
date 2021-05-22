const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/user', controller.User);
router.postAsync('/saveUser', controller.createUser);


module.exports = router; 