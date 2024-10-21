import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Toggle switch container */}
      <div
        className={`w-[9em] h-10 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isToggled ? 'bg-gray-600' : 'bg-gray-400'}`}
        onClick={handleToggle}
      >
   
        <div
          className={`w-20 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-black transition-transform duration-300 ${isToggled ? 'translate-x-14' : ''}`}
        >
          {isToggled ? 'WM' : 'Profile'}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
