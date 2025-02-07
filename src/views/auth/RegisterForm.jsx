import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/images/citythatlogo.png';
import backgroundImage from '../../assets/images/signupbg.jpg';
import axios from 'axios'; // Import axios for making API requests
import { useNavigate } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RegisterForm = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    setLoaded(true);
  }, []);

  const userRef = useRef();
  const errRef = useRef();

  const [firstname, setfirstname] = useState('');
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setfirstnameFocus] = useState(false);
  const [middleName, setMiddleName] = useState(''); // State for middle name
  const [lastname, setlastname] = useState('');
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setlastnameFocus] = useState(false);

  const [email, setemail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setemailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setpwdFocus] = useState(false);

  const [matchPwd, setmatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setmatchFocus] = useState(false);

  const [errMsg, seterrMsg] = useState('');
  const [success, setsuccess] = useState(false);

  // States for files
  const [profilePicture, setProfilePicture] = useState(null);
  const [resume, setResume] = useState(null);


  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  }, [success, navigate]);


  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(firstname);
    setValidFirstname(result);
  }, [firstname]);

  useEffect(() => {
    const result = USER_REGEX.test(lastname);
    setValidLastname(result);
  }, [lastname]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    const match = pwd === matchPwd;
    setValidPwd(result);
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    seterrMsg('');
  }, [firstname, lastname, email, pwd, matchPwd]);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'profilePicture') {
      setProfilePicture(files[0]);
    } else if (name === 'resume') {
      setResume(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validFirstname || !validLastname || !validEmail || !validPwd || !validMatch) {
      seterrMsg('Please fill out the form correctly.');
      return;
    }

    if (!email || !pwd || !profilePicture) {
      seterrMsg('Please provide all required fields: email, password, and profile picture.');
      return;
    }

    const user = {
      FirstName: firstname,
      MiddleName: middleName,
      LastName: lastname,
      Email: email,
      Password: pwd,
    };

    try {
      const formData = new FormData();
      formData.append('FirstName', user.FirstName);
      formData.append('MiddleName', user.MiddleName);
      formData.append('LastName', user.LastName);
      formData.append('Email', user.Email);
      formData.append('Password', user.Password);

      if (profilePicture) formData.append('Image', profilePicture);
      if (resume) formData.append('Resume', resume);
      formData.append('UserType', '1');

      const response = await axios.post('http://10.113.231.140:5019/api/User', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('User registered successfully:', response.data);
      setsuccess(true);
      seterrMsg('');
    } catch (error) {
      console.error('Error registering user:', error.response);
      if (error.response?.data) {
        console.log('Error details:', error.response.data);
      }
      seterrMsg('Failed to register user. Please try again.');
    }
  };



  return (
    <div
      className="relative min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >





      <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      <div
        className={`relative my-32 w-full max-w-3xl bg-white bg-opacity-75 p-10 rounded-lg shadow-md transition-all duration-500 ease-in-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >

        <p aria-live="polite" className="text-green-600">
          {success && 'Registration successful! Redirecting...'}
        </p>

        <div className="flex flex-row gap-6 items-center mb-6">
          <img className="w-[4em] h-auto" src={logo} alt="Logo" />
          <h2 className="text-2xl font-bold text-center">Register</h2>
        </div>

        <p
          ref={errRef}
          className={`${errMsg ? ' my-6 text-red-800 font-semibold bg-red-300 text-sm text-center py-1 border-1 border border-red-800' : 'hidden'
            }`}
          aria-live="assertive"
        >
          {errMsg}
        </p>



        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstname"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setfirstname(e.target.value)}
                required
                aria-invalid={validFirstname ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setfirstnameFocus(true)}
                onBlur={() => setfirstnameFocus(false)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your first name"
              />
              {!validFirstname && firstname && (
                <p className="text-red-500 text-xs mt-1">First name should be 4 to 23 characters long, starting with a letter.</p>
              )}
            </div>


            <div>
              <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                id="middleName"
                onChange={(e) => setMiddleName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your middle name"
              />
            </div>

            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastname"
                onChange={(e) => setlastname(e.target.value)}
                required
                aria-invalid={validLastname ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setlastnameFocus(true)}
                onBlur={() => setlastnameFocus(false)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your last name"
              />
              {!validLastname && lastname && (
                <p className="text-red-500 text-xs mt-1">Last name should be 4 to 23 characters long, starting with a letter.</p>
              )}
            </div>
          </div>

          <div className="col-span-2 mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setemail(e.target.value)}
              required
              aria-invalid={validEmail ? 'false' : 'true'}
              onFocus={() => setemailFocus(true)}
              onBlur={() => setemailFocus(false)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              placeholder="Enter your Email"
            />
            {!validEmail && email && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                onFocus={() => setpwdFocus(true)}
                onBlur={() => setpwdFocus(false)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Enter your password"
              />
              {!validPwd && pwd && (
                <p className="text-red-500 text-xs mt-1">
                  Password must be 8-24 characters long, include uppercase and lowercase letters, a number, and a special character.
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setmatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                onFocus={() => setmatchFocus(true)}
                onBlur={() => setmatchFocus(false)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
                placeholder="Confirm your password"
              />
              {!validMatch && matchPwd && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
              )}
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                accept=".png,.jpg"
                onChange={handleFileChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              />
            </div>

            {/* Upload Resume */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-transform transform focus:scale-105 focus:shadow-lg duration-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              disabled={!validFirstname || !validLastname || !validEmail || !validPwd || !validMatch}
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
