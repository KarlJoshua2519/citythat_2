import React from 'react'

import Navbar from './assets/Components/Navbar'
import Home from './views/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './assets/Components/Footer';
import Jonash from './views/Profile-Pages/Jonash';
import Luis from './views/Profile-Pages/Luis';
import Joper from './views/Profile-Pages/Joper';

function App() {

  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jonash" element={<Jonash />} />
        <Route path="/luis" element={<Luis />} />
        <Route path="/joper" element={<Joper />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
