const express = require('express');
const { login ,
    adminPanel,
    Iconst,
    Map,
    Notification,
    Tables,
    Typography,
    Upgrade,
    Users} = require('../controller/homeController');
const router = express.Router();

router.get('/login', login);

router.get('/adminpanel',adminPanel);

router.get('/icons', Iconst);

router.get('/map', Map);

router.get('/notifications', Notification)

router.get('/user', Users);

router.get('/tables', Tables);

router.get('/typography', Typography);

router.get('/upgrade', Upgrade)

module.exports = router;