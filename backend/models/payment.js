const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  isPaid: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
