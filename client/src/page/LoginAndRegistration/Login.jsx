import React, { useState, Fragment } from 'react';
import { Login as loginUser } from '../../api/Api'; 

const LoginForm = () => {
  const [isEmailStep, setIsEmailStep] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const handleNextClick = () => {
    if (!emailOrPhone.trim()) {
      setError('Please enter your email or phone.');
      return;
    }
    setError(null);
    setIsEmailStep(false);
  };

  const handleLogin = async () => {
    const { success, error: loginError } = await loginUser({
      email: emailOrPhone,
      password,
    });

    if (success) {
      alert('Login successful!');
      
    } else {
      setError(loginError || 'Login failed');
    }
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
        <div className="bg-white mt-20 mb-20 p-10 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-center text-2xl font-semibold mb-4">LOGIN / SIGN UP</h2>
          <hr className="mb-6" />

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
            <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md">
              <i className="fab fa-google mr-2"></i> Google
            </button>
          </div>

          <p className="text-center font-semibold mb-4">OR</p>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          {isEmailStep ? (
            <div className="mb-6">
              <label className="sr-only">Email or phone</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-envelope text-gray-400"></i>
                </span>
                <input
                  type="text"
                  placeholder="Email or phone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <label className="sr-only">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-lock text-gray-400"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
          )}

          {isEmailStep ? (
            <button
              onClick={handleNextClick}
              className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          )}

          <p className="text-gray-400 text-center mt-3">
            Not Registered? <a className="text-green-500" href="signup">Sign up</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
