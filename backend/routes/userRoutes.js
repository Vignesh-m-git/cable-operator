const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Add user route
router.post('/add', async (req, res) => {
  const { name, email, password, packageId } = req.body;

  try {
    const user = new User({ name, email, password, package: packageId });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create user', error });
  }
});

module.exports = router;
