// Authentication.js
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../ButtonStyles';

const Authentication = () => {
  return (
    <div className="container">
    <h1>Welcome to CryptoWallet!</h1>
    <h4>Sign in or register to access your wallet and manage your transactions.</h4>
    <br></br>
    <div className="auth-buttons">
      <CustomButton component={Link} to="/signin" variant="contained" color="primary">
        Sign In
      </CustomButton>
      <CustomButton className="secondary" component={Link} to="/registration" variant="contained" color="secondary">
        Register
      </CustomButton>
      </div>
    </div>
  );
};

export default Authentication;
