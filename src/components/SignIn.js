import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import CustomButton from '../ButtonStyles';

const SignIn = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const signIn = async () => {
    if (password && walletAddress) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const user = userData.find((user) => user.walletAddress === walletAddress);
      if (user && user.password === password) {
        localStorage.setItem('signedInWalletAddress', walletAddress);
        console.log('Signed in successfully. Redirecting to MainPage...');
        window.location.href = '/main'; // Redirect to the main page
      } else {
        setErrorMsg('Invalid wallet address or password');
      }
    } else {
      setErrorMsg('Please enter your wallet address and password to sign in.');
    }
  };

  return (
    <div className="container">
    <h1>Sign in to access your CryptoWallet and manage your transactions.</h1>
      <TextField
        label="Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CustomButton onClick={signIn} variant="contained" color="primary" style={{ marginLeft: '2px' }}>
        Sign In
      </CustomButton>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
};

export default SignIn;
