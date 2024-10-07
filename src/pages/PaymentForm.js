// // import React, { useState } from 'react';
import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    paymentId: '',
    amount: '',
    paymentMethod: 'credit card',
    currency: 'USD',
    userId: '',
    email: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    // Validate amount to ensure it's a positive number
    if (parseFloat(formData.amount) <= 0) {
      setStatus('Amount must be greater than zero.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Payment submitted successfully!');
        // Reset form
        setFormData({
          paymentId: '',
          amount: '',
          paymentMethod: 'credit card',
          currency: 'USD',
          userId: '',
          email: '',
        });
      } else {
        const errorData = await response.json(); // Get error details from response
        setStatus(`Failed to submit payment: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred while submitting the payment.');
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Payment ID:</label>
          <input
            type="text"
            name="paymentId"
            value={formData.paymentId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min="0" // Prevent negative numbers
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="credit card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank transfer">Bank Transfer</option>
          </select>
        </div>
        <div>
          <label>Currency:</label>
          <select name="currency" value={formData.currency} onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default PaymentForm;






