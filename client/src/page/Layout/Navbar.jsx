import React, { useEffect, useState } from "react";
import { IoIosCart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { getItemsFromLocalStorage } from "../Cart/cartlocal";
import {Link, useLocation} from "react-router-dom"



const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const[isDropDown,setIsDropDown] = useState(false);
  const [navbarfilter,setNavbarfiter] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 useEffect(() => {
   const savedItems = getItemsFromLocalStorage("cartItem", []);
   setCartItems(savedItems);
 }, []);

 const { pathname } = useLocation();

 const auth =true;
 const role = false;




  return (
    <div>
      <nav
        className={pathname === "/deshboard" ? "hidden" : "bg-white shadow-sm"}
      >
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
              {/* check auth */}
              {auth ? (
                <>
                  <div
                    className="flex gap-2 items-center cursor-pointer relative"
                    onClick={() => setIsDropDown(!isDropDown)}
                  >
                    <i class="fa-solid fa-user"></i>
                    <span>Aminur</span>
                    <i class="fa-solid fa-chevron-down"></i>

                    <div
                      className={
                        isDropDown
                          ? "absolute top-8 left-[-2rem] w-[12rem] border-2 shadow-md bg-[#FFFFFF] rounded-sm p-2 flex flex-col gap-4 z-[500]"
                          : "hidden"
                      }
                    >
                      {role ? (
                        <Link
                          to="/"
                          className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                         
                        >
                          <img
                            src="https://www.rokomari.com/static/200/images/user-profile/my_profile.svg"
                            alt=""
                            className="w-[1.4rem]"
                          />
                          My Deshboad
                        </Link>
                      ) : (
                        <Link
                          to="/profile"
                          className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE] "
                         
                        >
                          <img
                            src="https://www.rokomari.com/static/200/images/user-profile/my_profile.svg"
                            alt=""
                            className="w-[1.4rem]"
                          />
                          My Profile
                        </Link>
                      )}
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/orders.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Orders
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/thumb_up_2_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Bestselling eBooks
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/notebook_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        eBook Library
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/list_check_3_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Booklist
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-choice/user-interest-page-icon.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        My Interests
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/book_3_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Bookshelf
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/heart_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Wishlist
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/star_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Reviews
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/Point.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Rokomari Points
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/user_heart_line.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Following Authors
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/arcticons_bkash.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Bkash Account
                      </Link>
                      <Link
                        to="/"
                        className="flex gap-2 items-center text-[#212529] font-normal text-nowrap text-[1rem] hover:text-[#4398FE]"
                       
                      >
                        <img
                          src="https://www.rokomari.com/static/200/images/user-profile/tabler--logout-2.svg"
                          alt=""
                          className="w-[1.4rem]"
                        />
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    Sign In
                  </Link>
                </>
              )}

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