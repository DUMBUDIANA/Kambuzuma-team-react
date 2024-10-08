import React, { useState, useEffect } from 'react';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch('/payments');
        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPayments();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/payments/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
      setPayments(payments.filter((payment) => payment._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {payments.map((payment) => (
        <div key={payment._id}>
          <h3>{payment.paymentMethod}</h3>
          <p>Amount: {payment.amount}</p>
          <p>Date: {payment.paymentDate}</p>
          <button onClick={() => handleDelete(payment._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PaymentList;