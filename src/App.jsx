import React from 'react';
import Navbar from './assets/Components/Navbar';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './assets/Components/Footer';
import Jonash from './views/Profile-Pages/Jonash';
import Luis from './views/Profile-Pages/Luis';
import Joper from './views/Profile-Pages/Joper';
import ChatBot from './assets/Components/Chatbot';
import ProfileNav from './views/Profile-Pages/ProfileNav';
import MarketPlace from './views/MarketPlace/MarketPlace';
import AboutUs from './views/AboutUs';
import RegisterForm from './views/auth/RegisterForm';
import LoginForm from './views/auth/LoginForm';
import AlbumPage from './assets/Album/AlbumPage';
import Wallet from './views/MarketPlace/Wallet';
import Profile from './views/Profile-Pages/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><AboutUs /></>} />
        <Route path="/jonash" element={<><ProfileNav /><Jonash /></>} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/luis" element={<><ProfileNav /><Luis /></>} />
        <Route path="/joper" element={<><ProfileNav /><Joper /></>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/wallet" element={<><Wallet /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /></>} />
        <Route path="/album/:id" element={<><ProfileNav /><AlbumPage /></>} /> 
      </Routes>
      <ChatBot />
      <Footer />
    </Router>
  );
}

export default App;
