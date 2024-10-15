const express = require('express');
const { generateMonthlyReport } = require('../controllers/reportController');
const router = express.Router();

router.get('/monthly/:month', generateMonthlyReport);

module.exports = router;
