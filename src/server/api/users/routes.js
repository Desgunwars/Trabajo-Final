const express = require('@awaitjs/express');
const controller = require('./controller');
const auth = require('../../middleware/auth');
const router = express.Router();

router.postAsync('/signin', controller.User);
router.postAsync('/singup', controller.createUser);
router.getAsync('/getProduct', controller.getProductAll)
router.getAsync('/getProductBebe', controller.getProductBebe)
router.getAsync('/getProductNiños', controller.getProductNiños)
router.getAsync('/getProductJovenes', controller.getProductJovenes)
router.getAsync('/getProductAdultos', controller.getProductAdultos)

module.exports = router; 

