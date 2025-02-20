import React, { useState, useEffect } from 'react';
import logo from '../images/citythatlogo.png';
import axios from 'axios';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);  // Store the user's information
  const [showProfileMenu, setShowProfileMenu] = useState(false);  // Manage profile dropdown visibility

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      // Fetch user data using the token
      axios
        .get('https://api.ctythat.com/api/Auth', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);  // Set the user data (first name, last name, etc.)
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token
    setUser(null); // Clear user data
    // Optionally, redirect to login page
    window.location.href = '/login';
  };

  return (
    <nav className="w-full p-4 flex bg-white flex-row items-center justify-between fixed top-0 border-b border-[#E4E4E4] left-0 z-50">
      <a href="/"><img className="w-auto h-[3em]" src={logo} alt="Logo" /></a>
      <ul className="text-[#666666] text-[0.8em] font-medium flex flex-row gap-10 relative items-center">
        <li
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="#">OUR STORY</a>
          {showDropdown && (
            <div className="absolute top-full right-0 bg-white border w-[60em] p-10 flex flex-row items-center justify-center gap-6 shadow-lg">
              <img className="h-auto w-[30em]" src={logo} alt="" />
              <div className="flex flex-col mx-10 w-full">
                <h1 className="text-lg font-bold">Our Story</h1>
                <div className="bg-primary w-full h-1"></div>
                <ul className="flex flex-col gap-2 mt-6">
                  <li><a href="/about">ABOUT US</a></li>
                  <li><a href="#">TIMELINE</a></li>
                  <li><a href="#">LEADERSHIP</a></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li><a href="/marketplace" className="">MARKETPLACE</a></li>

        {/* Conditionally render links based on user login status */}
        {user ? (
          <li 
            className="flex items-center gap-4 relative" 
            onMouseEnter={() => setShowProfileMenu(true)} 
            onMouseLeave={() => setShowProfileMenu(false)}
          >

            <img
              src={`https://api.ctythat.com/${user.image}`}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-[#666666] font-medium uppercase">
              {user.firstName[0]}{user.lastName[0]}
            </span>

 
            {showProfileMenu && (
              <div className="absolute right-0 top-5 bg-white shadow-lg border mt-2 w-40 p-2 flex flex-col">
                <a href="/profile" className="py-2 px-4 hover:bg-gray-100">My Profile</a>
                <a onClick={handleLogout} className="py-2 px-4 text-red-600 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </li>
        ) : (
          <>
            <li><a href="/register">SIGN UP</a></li>
            <li><a href="/login">LOG IN</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
