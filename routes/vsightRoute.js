//routes/vsightRoute.js

const express = require('express');
const router = express.Router();
const vsightController = require('../controllers/vsightController.js');

// Product List Page (Protected Page)
router.get('/blogs/post-list', vsightController.renderPostList);
router.get('/blogs/post-create', vsightController.renderPostCreate);

module.exports = router;
