import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [nameFocus, setNameFocus] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameFocus = () => {
    setNameFocus(true);
  };

  const handleNameBlur = () => {
    setNameFocus(false);
  };

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handleEmailBlur = () => {
    setEmailFocus(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocus(false);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Continue with Google');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-2 text-gray-600 dark:text-gray-300" htmlFor="name">
              Name
            </label>
            <div className={`relative flex items-center rounded-lg py-2 px-3 transition-all duration-300 border-2 ${nameFocus ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
              <FaUser className={`mr-2 text-gray-500 dark:text-gray-400`} />
              <input
                className="w-full px-2 py-1 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-gray-600 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <div className={`relative flex items-center rounded-lg py-2 px-3 transition-all duration-300 border-2 ${emailFocus ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
              <FaEnvelope className={`mr-2 text-gray-500 dark:text-gray-400`} />
              <input
                className="w-full px-2 py-1 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-gray-600 dark:text-gray-300" htmlFor="password">
              Password
            </label>
            <div className={`relative flex items-center rounded-lg py-2 px-3 transition-all duration-300 border-2 ${passwordFocus ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'}`}>
              <FaLock className={`mr-2 text-gray-500 dark:text-gray-400`} />
              <input
              className="w-full px-2 py-1 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
              />
              <button
              type="button"
              onClick={handleTogglePassword}
              className="text-gray-500 dark:text-gray-400 focus:outline-none"
              >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              </div>
              </div>
              <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 active:scale-90 rounded-lg hover:bg-blue-600 transition duration-300"
              >
              Sign Up
              </button>
              <div className="text-center my-2 text-gray-600 dark:text-gray-400">or</div>
              <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-red-600 text-white py-3 active:scale-90 rounded-lg hover:bg-red-700 flex items-center justify-center transition duration-300 mb-4"
              >
              <FaGoogle className="mr-2" /> Continue with Google
              </button>
              <div className="mt-4 text-gray-600 dark:text-gray-400 text-center">
              Already have an account? <a href="/login" className="text-blue-600 dark:text-blue-400">Login</a>
              </div>
              </form>
              </div>
              </div>
              );
              }
              
              export default Signup;              