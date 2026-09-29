
import React, { useState } from 'react';

export default function PaymentGateway() {
  const [amount, setAmount] = useState(0);

  const PUBLIC_STRIPE_SECRET_KEY = process.env.STRIPE_KEY; 
  const token = "ey6878nu8uu";

  const handlePayment = async () => {
    console.log("Processing payment...");
  };

  return (
    <button onClick={handlePayment}>Pay Now</button>
  );
}
