const express = require('express');

const path = require('path');
const productsController = require('../controllers/products');

// const rootDir = require('../util/helper')

const router = express.Router();


router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postAddProduct);

module.exports = router;