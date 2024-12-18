//controllers/productController.js

const axios = require('axios');
const BACKEND_API = process.env.BACKEND_API || 'http://localhost:3000/api'; // Replace with your backend URL

exports.renderPostList = async (req, res) => {
    try {

        const response = await axios.get(`${BACKEND_API}/vsight`);
        const vsights = response.data.vsights;

        console.log(vsights);

        res.render('contents/blogs/post-list', { vsights });
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};

exports.renderPostCreate = async (req, res) => {
    try {
        res.render('contents/blogs/post-create');
    } catch (err) {
        console.error(err.message);
        res.redirect('/login');
    }
};
