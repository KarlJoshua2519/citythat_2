import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/citythatlogo.png';
import backgroundImage from '../../assets/images/signupbg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const login = async (e) => {
    e.preventDefault(); // Prevent form reload
    setErrMsg(''); // Reset error messages

    try {
      const response = await axios.post('https://api.ctythat.com/api/Auth/Login', {
        Email: email,
        Password: pwd,
      });
    
      console.log('API Response:', response.data); // Check the API response structure here
    
      const token = response.data; // Adjust this key to match your API response
      localStorage.setItem('authToken', token);
    
      console.log('Login successful, token saved:', token);
      setSuccess(true);
    
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error during login:', error);
      setErrMsg('Invalid email or password. Please try again.');
    }
    
  };

  const logout = () => {
    localStorage.removeItem('authToken'); // Remove token
    console.log('Logged out, token removed');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div
      className="relative min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div
        className={`relative my-32 w-full max-w-md bg-white bg-opacity-75 p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out transform ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex flex-row gap-6 items-center mb-6">
          <img className="w-[4em] h-auto" src={logo} alt="Logo" />
          <h2 className="text-2xl font-bold text-center">Login</h2>
        </div>

        {errMsg && (
          <p className="bg-red-300 border-red-600 border bg-opacity-50 py-1 text-sm text-red-800 font-medium text-center mb-4">
            {errMsg}
          </p>
        )}

        {success && (
          <p className="bg-green-300 border-green-600 border bg-opacity-50 py-1 text-sm text-green-800 font-medium text-center mb-4">
            Login Successful! Redirecting...
          </p>
        )}

        <form onSubmit={login}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary-dark transition-transform transform hover:scale-105 duration-200"
            >
              Login
            </button>
          </div>

          <p className="text-sm text-center">
            Don't have an account?{' '}
            <a className="text-primary font-bold" href="/register">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
