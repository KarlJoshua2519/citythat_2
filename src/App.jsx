import React from 'react'

import Navbar from './assets/Components/Navbar'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './assets/Components/Footer';
import Jonash from './views/Profile-Pages/Jonash';
import Luis from './views/Profile-Pages/Luis';
import Joper from './views/Profile-Pages/Joper';
import ChatBot from './assets/Components/Chatbot';
import ProfileNav from './views/Profile-Pages/ProfileNav';
import MarketPlace from './views/MarketPlace/MarketPlace';

function App() {

  return (


    <Router>
      
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/jonash" element={<><ProfileNav/><Jonash /></>} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/luis" element={<Luis />} />
        <Route path="/joper" element={<Joper />} />
      </Routes>
      <ChatBot/>
      <Footer/>
    </Router>

  )
}

export default App
