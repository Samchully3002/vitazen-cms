//routes/productRoute.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

// Product List Page (Protected Page)
router.get('/products/product-list', productController.renderProductList);
router.get('/products/discount-list', productController.renderDiscountList);

module.exports = router;
