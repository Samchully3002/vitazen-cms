//controllers/dashboardController.js

const axios = require('axios');
const BACKEND_API = process.env.BACKEND_API || 'http://localhost:3000'; // Replace with your backend URL

exports.renderDashboard = async (req, res) => {
    try {

        const resProduct = await axios.get(`${BACKEND_API}/api/dashboard-product`);
        const resPromo = await axios.get(`${BACKEND_API}/api/dashboard-promo`);
        const resReview = await axios.get(`${BACKEND_API}/api/dashboard-review`);
        
        
        const products = resProduct.data;
        const promo = resPromo.data;
        const review = resReview.data;

         res.render('contents/dashboard', { products, promo, review });
        //res.render('contents/dashboard');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};
