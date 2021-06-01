'use strict'
const express = require('@awaitjs/express');
const router = express.Router();
const controller = require('./controller');
const auth = require('../../middleware/auth');


router.postAsync('/adminUp', controller.singUpAdmin);
router.postAsync('/adminIn', controller.singInAdmin);
router.postAsync('/adminUpload', controller.UploadProduct);
router.getAsync('/getProduct', controller.getProductAll)
router.getAsync('/getProductBebe', controller.getProductBebe)
router.getAsync('/getProductNiños', controller.getProductNiños)
router.getAsync('/getProductJovenes', controller.getProductJovenes)
router.getAsync('/getProductAdultos', controller.getProductAdultos)

module.exports = router;

