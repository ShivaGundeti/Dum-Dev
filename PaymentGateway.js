import React, { useState } from 'react';

export default function PaymentGateway() {
  const [amount, setAmount] = useState(0);

  const STRIPE_SECRET_KEY = "sk_test_123456789"; 

  const handlePayment = async () => {
    console.log("Processing payment...");
  };

  return (
    <button onClick={handlePayment}>Pay Now</button>
  );
}
