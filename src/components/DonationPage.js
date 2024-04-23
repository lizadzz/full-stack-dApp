import React, { useState } from 'react';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [donationResult, setDonationResult] = useState('');

  const handleDonation = () => {
    const amountToDonate = parseFloat(amount);

    if (!amountToDonate || amountToDonate <= 0) {
      setDonationResult('Please enter a valid amount.');
      return;
    }

    const signedInWalletAddress = localStorage.getItem('signedInWalletAddress');
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : [];

    const user = userData.find((user) => user.walletAddress === signedInWalletAddress);

    if (!user) {
      setDonationResult('User not found.');
      return;
    }

    if (user.balance < amountToDonate) {
      setDonationResult('Insufficient balance.');
      return;
    }

    user.balance -= amountToDonate;
    localStorage.setItem('userData', JSON.stringify(userData));

    setDonationResult(`Successfully donated ${amountToDonate} to the project creator.`);
    setAmount('');
  };

  return (
    <div className="container">
      <h1>Donation Page</h1>
      <label>
        Enter donation amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button onClick={handleDonation}>Donate</button>
      {donationResult && <p>{donationResult}</p>}
    </div>
  );
};

export default DonationPage;
