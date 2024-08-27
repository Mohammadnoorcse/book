import React, { useState, Fragment } from 'react';

const Login = () => {
  const [isEmailStep, setIsEmailStep] = useState(true); // State to track if we are on the email step

  const handleNextClick = () => {
    setIsEmailStep(false);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center bg-gray-100 ">
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

          {isEmailStep ? (
            // Email or Phone Input
            <div className="mb-6">
              <label className="sr-only">Email or phone</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-envelope text-gray-400"></i>
                </span>
                <input
                  type="text"
                  placeholder="Email or phone"
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
          ) : (
            // Password Input
            <div className="mb-6">
              <label className="sr-only">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <i className="fas fa-lock text-gray-400"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
          )}

          {isEmailStep ? (
            // Next Button
            <button
              onClick={handleNextClick}
              className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
            >
              Next
            </button>
          ) : (
            // Login Button
            <button
              onClick={() => alert('Logged In')}
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
            
          )}
          <p className="text-gray-400 text-center mt-3">Not Registered? <a className='text-green-500' href="signup">Sign in</a></p>

        </div>

        
      </div>
    </Fragment>
  );
};

export default Login;
