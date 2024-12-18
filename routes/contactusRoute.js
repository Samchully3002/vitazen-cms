//routes/contactusRoute.js

const express = require('express');
const router = express.Router();
const contactusController = require('../controllers/contactusController.js');

// Product List Page (Protected Page)
router.get('/contact-us/message-list', contactusController.renderMessageList);


module.exports = router;
