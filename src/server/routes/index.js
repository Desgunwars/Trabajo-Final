'use strict'
const express = require('express');
const users = require('../api/users/routes');
const admin = require('../api/Admin/routes');
const router = express.Router();

router.use('/users', users);
router.use('/admin', admin);

module.exports = router;