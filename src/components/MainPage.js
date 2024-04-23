import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [balance, setBalance] = useState(null);
  const [transactionResult, setTransactionResult] = useState('');
  const otherWalletAddressRef = useRef(null);
  const transactionAmountRef = useRef(null);

  const showBalance = () => {
    try {
      const signedInWalletAddress = localStorage.getItem('signedInWalletAddress');
      if (signedInWalletAddress) {
        const userDataString = localStorage.getItem('userData');
        const userData = userDataString ? JSON.parse(userDataString) : [];
    
        const user = userData.find((user) => user.walletAddress === signedInWalletAddress);
        if (user) {
          setBalance(user.balance);
        } else {
          setBalance(null);
        }
      } else {
        setBalance(null);
      }
    } catch (error) {
      console.error(error);
      setBalance(null);
    }
  };  

  const sendTransaction = () => {
    const otherWalletAddress = otherWalletAddressRef.current.value;
    const transactionAmount = parseFloat(transactionAmountRef.current.value);
  
    if (!otherWalletAddress || !transactionAmount) {
      setTransactionResult('Please enter a valid wallet address and amount.');
      return;
    }
  
    try {
      const signedInWalletAddress = localStorage.getItem('signedInWalletAddress');
      const userDataString = localStorage.getItem('userData');
      const userData = userDataString ? JSON.parse(userDataString) : [];
  
      const senderIndex = userData.findIndex(user => user.walletAddress === signedInWalletAddress);
      const receiverIndex = userData.findIndex(user => user.walletAddress === otherWalletAddress);
  
      if (senderIndex === -1 || receiverIndex === -1) {
        setTransactionResult('Sender or receiver wallet not found.');
        return;
      }
  
      const sender = userData[senderIndex];
      const receiver = userData[receiverIndex];
  
      if (sender.balance < transactionAmount) {
        setTransactionResult('Insufficient balance.');
        return;
      }
  
      sender.balance -= transactionAmount;
      receiver.balance += transactionAmount;
  
      userData[senderIndex] = sender;
      userData[receiverIndex] = receiver;
  
      localStorage.setItem('userData', JSON.stringify(userData));
  
      setBalance(sender.balance);
      setTransactionResult(`Sent ${transactionAmount} to ${otherWalletAddress}`);
  
      otherWalletAddressRef.current.value = '';
      transactionAmountRef.current.value = '';
    } catch (error) {
      console.error(error);
      setTransactionResult('An error occurred. Please try again.');
    }
  };  

  return (
    <div className="container">
    <h1>Welcome to CryptoWallet!</h1>
    <h4 style={{ marginLeft: '30px' }}> View your wallet balance with ease</h4>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <button onClick={showBalance}>Show Balance</button>
    {balance !== null && <p style={{ marginLeft: '10px' }}>Balance: {balance}</p>}
    </div>

      <form onSubmit={(e) => { e.preventDefault(); sendTransaction(); }}>
      <h4 style={{ marginLeft: '65px' }}>Manage your transactions</h4>
        <label>
          Other Wallet Address:
          <input type="text" ref={otherWalletAddressRef} />
        </label>
        <br></br>
        <label>
          Amount:
          <input type="number" ref={transactionAmountRef} />
        </label>
        <button type="submit">Send Transaction</button>
      </form>
      {transactionResult && <p>{transactionResult}</p>}
      <br></br>
      <Link to="/donate" style={{ textDecoration: 'none', color: 'inherit' }}>
       <p style={{ display: 'inline' }}>Support our project by clicking on  this text :D</p>
      </Link>


    </div> 
  );
};

export default MainPage;