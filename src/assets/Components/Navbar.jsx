import React, { useState } from 'react';
import logo from '../images/citythatlogo.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full p-4 flex bg-white flex-row items-center justify-between fixed top-0 border-b border-[#E4E4E4] left-0 z-50">
      <a href="/"><img className="w-auto h-[3em]" src={logo} alt="" /></a>
      <ul className="text-[#666666] text-[0.8em] font-medium flex flex-row gap-10 relative">
        <li
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="#">OUR STORY</a>
          {showDropdown && (
           <div
           className="absolute top-full right-0 bg-white border w-[60em] p-10 flex flex-row items-center justify-center gap-6 shadow-lg"
         >
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
        <li><a target="_blank" href="/marketplace" className="">MARKETPLACE</a></li>
        <li><a href="#">SIGN UP</a></li>
        <li><a href="#">LOG IN</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
