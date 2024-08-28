import React, { useEffect, useState } from "react";
import { IoIosCart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { getItemsFromLocalStorage } from "../Cart/cartlocal";
import {Link} from "react-router-dom"



const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarfilter,setNavbarfiter] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 useEffect(() => {
   const savedItems = getItemsFromLocalStorage("cartItem", []);
   setCartItems(savedItems);
 }, []);


  return (
    <div>
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-black">
                {/* Your Logo Image */}
                <img
                  src="https://www.rokomari.com/static/200/images/rokomari_logo.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Search Bar */}
            {/* <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for the old book you need"
              className="bg-gray-200 rounded-md px-4 py-2 w-80"
            />
            <button className="px-4 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-md flex items-center">
            <CiSearch className="mr-1" /></button>
          </div> */}

            <div className="hidden md:flex w-[50%] h-[2.3rem] border-[#4B9CC8] border items-center rounded-[1rem] p-1">
              <div className="flex gap-2 items-center bg-[#E6F2FF] w-[9rem] h-full justify-center p-1 rounded-[1rem] text-[#737373] ">
                <span
                  className={
                    navbarfilter === "book"
                      ? "bg-[#4398FE] w-[3.2rem] text-white rounded-[1rem] text-center cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => setNavbarfiter("book")}
                >
                  book
                </span>
                <span
                  className={
                    navbarfilter === "superstore"
                      ? "bg-[#4398FE] w-[5.5rem] text-white rounded-[1rem] text-center cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => setNavbarfiter("superstore")}
                >
                  superstore
                </span>
              </div>
              <input
                type="text"
                className="w-full h-full border-none outline-none p-1 text-[#737373]"
                placeholder="search book"
              />
              <i class="fa-solid fa-magnifying-glass text-[#4B9CC8] cursor-pointer"></i>
            </div>

            {/* Right Side Links */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link to="/login" className="text-gray-600 hover:text-blue-500">
                Sign In
              </Link>
              <Link
                to="/becomeseller"
                className="text-gray-600 hover:text-blue-500"
              >
                Become A Seller
              </Link>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-blue-500 relative"
              >
                <IoIosCart />
                <div
                  className={
                    cartItems && cartItems.length > 0
                      ? "absolute top-[-0.8rem] left-2 w-4  h-4 bg-[red] rounded-md flex justify-center items-center"
                      : "hidden"
                  }
                >
                  <p className="text-white text-[10px]">{cartItems.length}</p>
                </div>
              </Link>
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
            className={`md:hidden mobile-menu ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
          >
            <input
              type="text"
              placeholder="Search for the old book you need"
              className="bg-gray-200 rounded-md px-4 py-2 w-full my-2"
            />
            <Link
              to="/login"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
            >
              Sign In
            </Link>
            <Link
              to="/"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
            >
              Become A Seller
            </Link>
            <Link
              to="/cart"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200"
            >
              Cart
            </Link>
          </div>
        </div>

        {/* Bottom Navigation Links */}
        <div className="bg-blue-50 py-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-6 overflow-x-auto text-center">
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                লেখক
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                বিষয়
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                বইমেলা
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                ই-বুক
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                HSC ও ভর্তি প্রস্তুতি
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                ইসলামি বই
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                ইংরেজি ভাষার বই
              </Link>
              <Link
                 to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                পশ্চিমবঙ্গের বই
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 whitespace-nowrap"
              >
                অতিরিক্ত ছাড়ের বই
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar