//routes/adminRoute.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const { requireAuth } = require('../middleware/authMiddleware.js');

// Product List Page (Protected Page)
router.get('/peoples/admin-list',requireAuth, userController.renderUserList);
router.get('/peoples/admin-create',requireAuth, userController.renderUserCreate);
router.get('/peoples/admin-edit/:accountNumber',requireAuth, userController.renderUserEdit);
// router.get('/poples/post-delete/:id',requireAuth, vsightController.deleteBlog);

module.exports = router;
