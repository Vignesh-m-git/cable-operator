const express = require('express');
const { processUPIPayment } = require('../controllers/paymentController');
const router = express.Router();

router.post('/upi', processUPIPayment);

module.exports = router;
