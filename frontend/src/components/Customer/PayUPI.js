import React, { useState } from 'react';
import axios from 'axios';

const PayUPI = () => {
  const [amount, setAmount] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');

  const handlePayment = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/payments/upi', { amount });
      setOrderId(res.data.orderId);
    } catch (err) {
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Pay UPI</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay via UPI</button>
      {orderId && <p>Payment successful. Order ID: {orderId}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PayUPI;
