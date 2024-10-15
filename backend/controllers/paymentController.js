const Payment = require('../models/payment');
const Razorpay = require('razorpay');

// UPI integration via Razorpay
const razorpay = new Razorpay({
  key_id: process.env.UPI_KEY_ID,
  key_secret: process.env.UPI_KEY_SECRET,
});

exports.processUPIPayment = async (req, res) => {
  const { userId, amount } = req.body;

  const options = {
    amount: amount * 100, // Convert amount to paisa
    currency: 'INR',
    receipt: `order_rcptid_${userId}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    await Payment.create({ userId, amount, isPaid: true });
    res.status(201).json({ success: true, orderId: order.id });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment processing failed', error });
  }
};
