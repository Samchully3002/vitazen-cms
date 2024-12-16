//routes/dashboardRoute.js

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');

// Dashboard Page (Protected Page)
router.get('/dashboard', dashboardController.renderDashboard);

module.exports = router;
