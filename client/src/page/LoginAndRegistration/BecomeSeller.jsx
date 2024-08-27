import React, { useState } from 'react';

const BecomeSeller = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    tradeLicense: '',
    tinNumber: '',
    ownerName: '',
    contactNumber: '',
    businessAddress: '',
    ownerEmail: '',
    productType: '',
    portfolioLink: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white mt-10 mb-10 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-center text-3xl font-semibold mb-6">Become a Seller</h2>
        <p className="text-center mb-8 text-gray-700">
          আমরা বিশ্বাস করি আপনার সততা ও অন্যদের মাধ্যমে আপনি ইতিমধ্যে সমাজে ইতিবাচক প্রভাব রাখছেন। একটি সফল ব্যবসা গড়ে তুলতে প্রয়োজন নেতৃত্বের, যার কারণে আমরা আপনার সাথে কাজ করতে চাই। 
        </p>

        <form onSubmit={handleSubmit}>
          {/* Business Organization Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Business Organization Name *</label>
            <input
              type="text"
              name="businessName"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Trade License Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Trade License Number *</label>
            <input
              type="text"
              name="tradeLicense"
              placeholder="Enter your trade license number"
              value={formData.tradeLicense}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* TIN Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">TIN Number *</label>
            <input
              type="text"
              name="tinNumber"
              placeholder="Enter your TIN number"
              value={formData.tinNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Business Owner Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Business Owner Name *</label>
            <input
              type="text"
              name="ownerName"
              placeholder="Enter business owner's name"
              value={formData.ownerName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Contact Number *</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter contact number"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Business Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Business Address *</label>
            <input
              type="text"
              name="businessAddress"
              placeholder="Enter your business address"
              value={formData.businessAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Owner Email Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Owner Email Address *</label>
            <input
              type="email"
              name="ownerEmail"
              placeholder="Enter owner's email address"
              value={formData.ownerEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Products Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Products Type *</label>
            <input
              type="text"
              name="productType"
              placeholder="Enter the type of products you sell"
              value={formData.productType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Product Portfolio (Website/Facebook Link) */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Product Portfolio (Website/Facebook Link) *</label>
            <input
              type="url"
              name="portfolioLink"
              placeholder="Enter your portfolio link"
              value={formData.portfolioLink}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeSeller;