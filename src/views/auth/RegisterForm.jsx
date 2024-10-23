import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/citythatlogo.png'; // Your logo
import backgroundImage from '../../assets/images/signupbg.jpg'; // Add your background image path

const LoginForm = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="relative min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div
        className={`relative my-32 w-full max-w-3xl bg-white bg-opacity-75 p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="flex flex-row gap-6 items-center mb-6">
          <img className="w-[4em] h-auto" src={logo} alt="Logo" />
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </div>

        <form className="">
          {/* Email */}
          <div className="group">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300 group-hover:scale-105"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="group">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300 group-hover:scale-105"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary transition-transform transform hover:scale-105 duration-200"
            >
              Login
            </button>
          </div>

          <p className="text-sm text-center col-span-2">
            Don't have an account?{' '}
            <a className="text-primary font-bold" href="">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
