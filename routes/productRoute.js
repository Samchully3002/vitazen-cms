//routes/productRoute.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

// Product List Page (Protected Page)
router.get('/products/product-list', productController.renderProductList);
router.get('/products/product-create', productController.renderProductPost);
router.get('/products/discount-list', productController.renderDiscountList);
router.get('/products/discount-create', productController.renderDiscountPost);

module.exports = router;
