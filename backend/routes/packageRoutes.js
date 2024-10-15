const express = require('express');
const router = express.Router();
const Package = require('../models/package');

// Add or modify package route
router.post('/add', async (req, res) => {
  const { name, price } = req.body;

  try {
    const pkg = new Package({ name, price });
    await pkg.save();
    res.status(201).json(pkg);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add package', error });
  }
});

module.exports = router;
