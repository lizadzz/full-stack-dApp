import React, { useState } from 'react';
import { ethers } from 'ethers';
import TextField from '@mui/material/TextField';
import CustomButton from '../ButtonStyles';

const Registration = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationMsg, setConfirmationMsg] = useState('');

  const generateWallet = () => {
    const newWallet = ethers.Wallet.createRandom();
    setWalletAddress(newWallet.address);
    setPassword('');
    setConfirmationMsg('');
  };

  const confirmAccountCreation = () => {
    if (password && walletAddress) {
      const randomBalance = Math.floor(Math.random() * 1000); // Generate a random balance
      let userData = JSON.parse(localStorage.getItem('userData')) || []; // Get existing data or an empty array
  
      // Check if the first entry is not a valid JSON object
      if (!userData[0] || !userData[0].walletAddress) {
        userData = userData.slice(1); // Remove the first entry
      }
  
      const newUserData = [...userData, { walletAddress, password, balance: randomBalance }]; // Include the new user data
      localStorage.setItem('userData', JSON.stringify(newUserData)); // Store the updated array
      setConfirmationMsg('Account created successfully!');
      // Redirect to authentication page after account creation
      setTimeout(() => {
        window.location.href = '/'; // Redirect to the root URL (authentication page)
      }, 1000); // Redirect after 1 second (adjust as needed)
    } else {
      setConfirmationMsg('Please generate a wallet and enter a password to confirm.');
    }
  };   

  return (
    <div className="container">
    <h1>Create your CryptoWallet account to start managing your digital assets securely.</h1>
      <CustomButton onClick={generateWallet} variant="contained" color="primary" style={{ marginLeft: '170px' }}>
        Generate Wallet
      </CustomButton>
      {walletAddress && (
        <div>
        <br></br>
          <p>Wallet Address: {walletAddress}</p>
          <br></br>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CustomButton onClick={confirmAccountCreation} variant="contained" color="primary" style={{ marginTop: '10px', marginLeft: '20px'}}>
            Confirm Account Creation
          </CustomButton>
          <br></br>
          <p>{confirmationMsg}</p>
        </div>
      )}
    </div>
  );
};

export default Registration;