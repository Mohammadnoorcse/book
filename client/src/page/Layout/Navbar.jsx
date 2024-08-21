import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiSignIn } from "react-icons/pi";




const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-black">
              {/* Your Logo Image */}
              <img src="https://www.rokomari.com/static/200/images/rokomari_logo.png" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for the old book you need"
              className="bg-gray-200 rounded-md px-4 py-2 w-80"
            />
            <button className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-md flex items-center">
            <CiSearch className="mr-1" /></button>
          </div>

          {/* Right Side Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-500">
            Sign In
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              Become A Seller
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
            <IoIosCart />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMobileMenuToggle}
              className="mobile-menu-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden mobile-menu ${isMobileMenuOpen ? "" : "hidden"}`}
        >
          <input
            type="text"
            placeholder="Search for the old book you need"
            className="bg-gray-200 rounded-md px-4 py-2 w-full my-2"
          />
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
            Sign In
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
            Become A Seller
          </a>
          <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
            Cart
          </a>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="bg-blue-50 py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto text-center">
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              লেখক
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              বিষয়
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              বইমেলা 
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              ই-বুক
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              HSC ও ভর্তি প্রস্তুতি
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              ইসলামি বই
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              ইংরেজি ভাষার বই
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              পশ্চিমবঙ্গের বই
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              অতিরিক্ত ছাড়ের বই
            </a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar