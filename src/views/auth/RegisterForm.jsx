import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/citythatlogo.png';
import backgroundImage from '../../assets/images/signupbg.jpg';

const RegisterForm = () => {
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
        className={`relative my-32 w-full max-w-3xl bg-white bg-opacity-75 p-10 rounded-lg shadow-md transition-all duration-500 ease-in-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <div className="flex flex-row gap-6 items-center mb-6">
          <img className="w-[4em] h-auto" src={logo} alt="Logo" />
          <h2 className="text-2xl font-bold text-center">Register</h2>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="col-span-2 mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Confirm your password"
              />
            </div>

            {/* Upload Profile Picture */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              />
            </div>

            {/* Upload Resume */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              />
            </div>
          </div>


          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary transition-transform transform hover:scale-105 duration-200"
            >
              Register
            </button>
          </div>

          <p className="text-sm text-center">
            Already have an account?{' '}
            <a className="text-primary font-bold" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
