//controllers/dashboardController.js

const axios = require('axios');
const BACKEND_API = process.env.BACKEND_API || 'http://localhost:3000'; // Replace with your backend URL

exports.renderDashboard = async (req, res) => {
    try {
        // Example: Fetch user data from backend API

        // const response = await axios.get(`${BACKEND_API}/landing/products/snovv-liposom`);
        // const vData = response.data;

        // console.log(vData);

        // res.render('contents/dashboard', { title: 'Dashboard', user: userData });
        res.render('contents/dashboard');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};
