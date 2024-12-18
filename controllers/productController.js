//controllers/productController.js

const axios = require('axios');
const BACKEND_API = process.env.BACKEND_API || 'http://localhost:3000/api'; // Replace with your backend URL

exports.renderProductList = async (req, res) => {
    try {

        const response = await axios.get(`${BACKEND_API}/products`);
        const products = response.data.products;

        res.render('contents/products/product-list', { products });
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderProductPost = async (req, res) => {
    try {
        res.render('contents/products/product-post');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderDiscountList = async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_API}/discounts`);
        const discounts = response.data.discounts;

        res.render('contents/products/discount-list', {discounts});
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderDiscountPost = async (req, res) => {
    try {
        res.render('contents/products/discount-post');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};
