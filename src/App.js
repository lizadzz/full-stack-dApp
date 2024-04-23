import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication';
import Registration from './components/Registration';
import SignIn from './components/SignIn';
import MainPage from './components/MainPage';
import DonationPage from './components/DonationPage';
import './styles.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/donate" element={<DonationPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
