'use strict'
const express = require('@awaitjs/express');
const router = express.Router();
const controller = require('./controller');
const auth = require('../../middleware/auth');


router.postAsync('/adminUp', controller.singUpAdmin);
router.postAsync('/adminIn', controller.singInAdmin);
router.postAsync('/adminUpload', controller.UploadProduct);
router.getAsync('/getProduct', controller.getProductAll);
router.getAsync('/getProductBebe', controller.getProductBebe);
router.getAsync('/getProductNiños', controller.getProductNiños);
router.getAsync('/getProductJovenes', controller.getProductJovenes);
router.getAsync('/getProductAdultos', controller.getProductAdultos);
router.getAsync('/getProductId', controller.getProductId);
router.getAsync('/getCategoryId', controller.getDesciption);
router.getAsync('/getUsers', controller.getUsers);
router.getAsync('/getPopularProduct', controller.getPopulartProducts);
router.getAsync('/clientesEstralla', controller.getClientStart);
router.getAsync('/byClient', controller.getByClient);
router.getAsync('/totalRecaudos', controller.getTotals)       
router.putAsync('/UpgradeProduct', controller.UpgradeProduct);
router.putAsync('/UpdateCategory', controller.updateCategory);
router.deleteAsync('/DeleteProduct', controller.DeleteProduct);

module.exports = router;

