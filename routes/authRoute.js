//routes/authRoute.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Login Page
router.get('/login', authController.renderLogin);


module.exports = router;
