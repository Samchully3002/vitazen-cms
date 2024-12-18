//controllers/productController.js

const axios = require('axios');
const BACKEND_API = process.env.BACKEND_API || 'http://localhost:3000/api'; // Replace with your backend URL

exports.renderHeroList = async (req, res) => {
    try {

        const response = await axios.get(`${BACKEND_API}/promotions/hero-banner`);
        const heroes = response.data.promotions;

        res.render('contents/promotions/hero-list', { heroes });
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderHeroPost = async (req, res) => {
    try {
        res.render('contents/promotions/hero-post');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderPromoList = async (req, res) => {
    try {
        const response = await axios.get(`${BACKEND_API}/promotions/promo-banner`);
        const promos = response.data.promotions;

        res.render('contents/promotions/promo-list', {promos});
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderPromoPost = async (req, res) => {
    try {
        res.render('contents/promotions/promo-post');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};
