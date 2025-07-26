import React, { useState } from 'react';
import { Register } from '../../api/Api';

const Signup = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    const { success, error, data } = await Register(formData);

    if (success) {
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
      // You can redirect or update UI here
    } else {
      alert(`Registration failed: ${error}`);
      console.error("API error details:", data);
    }
  };
  
  return (
    <div className="w-full flex justify-center items-center bg-gray-100">
      <div className="bg-white mt-10 mb-10 p-20 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-semibold mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
          >
            Sign Up
          </button>

          <p className="text-gray-400 text-center mt-3">
            Already a Member? <a className="text-green-500" href="login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
