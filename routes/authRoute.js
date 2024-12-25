//routes/authRoute.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');
const { signOut } = require('../middleware/authMiddleware.js');

// Login Page
router.get('/login', authController.renderLogin);
router.get('/logout', signOut,authController.renderLogin);


module.exports = router;
