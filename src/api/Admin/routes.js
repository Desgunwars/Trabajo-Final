'use strict'
const express = require('@awaitjs/express');
const router = express.Router();
const AdminController = require('../Admin/Admincontroller');

router.postAsync('/singupadmin', AdminController.singUpAdmin);

module.exports = router;