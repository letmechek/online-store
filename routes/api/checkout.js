const express = require('express');
const router = express.Router();
const paymentCtrl = require('../../controllers/api/checkout');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/payment', paymentCtrl.makePayment,ensureLoggedIn); 
router.get('/success', paymentCtrl.success);

module.exports = router;