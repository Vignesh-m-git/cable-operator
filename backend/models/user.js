const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
  package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  isPaid: { type: Boolean, default: false },
  paymentDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
