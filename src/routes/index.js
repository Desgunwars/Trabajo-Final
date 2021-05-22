const express = require('express');
const users = require('../api/users/routes');
const admin = require('../api/Admin/router');
const router = express.Router();

router.use('/users', users);

module.exports = router;