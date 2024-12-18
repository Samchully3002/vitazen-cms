//routes/promotionRoute.js

const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController.js');

// Product List Page (Protected Page)
router.get('/promotions/hero-list', promoController.renderHeroList);
router.get('/promotions/hero-create', promoController.renderHeroPost);
router.get('/promotions/promo-list', promoController.renderPromoList);
router.get('/promotions/promo-create', promoController.renderPromoPost);

module.exports = router;
