import React from 'react';
import { FaHome, FaTrophy, FaClipboardList, FaBox, FaChartLine, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useLocation,Link } from 'react-router-dom';


const Sidebar = ({ activeSidebar, setActiveSidebar }) => {
 

  return (
    <div className="h-screen bg-sky-50 text-neutral-500 flex flex-col justify-between">
      <div className="p-4 px-14">
        {/* Logo */}
        <div className="text-2xl font-bold mb-10">
          <span className="text-neutral-950">Book</span>
        </div>

        {/* Menu Items */}
        <nav>
          <ul className="space-y-4">
            <li
              className={
                activeSidebar === "deshboard"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("deshboard")}
            >
              <FaHome /> <span>Dashboard</span>
            </li>
            {/* <li className="flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded">
              <FaHome /> <span>Dashboard</span>
            </li> */}
            <li
              className={
                activeSidebar === "leaderboard"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("leaderboard")}
            >
              <FaTrophy /> <span>Leaderboard</span>
            </li>
            <li
              className={
                activeSidebar === "order"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("order")}
            >
              <FaClipboardList /> <span>Order</span>
            </li>
            <li
              className={
                activeSidebar === "product"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("product")}
            >
              <FaBox /> <span>Products</span>
            </li>
            <li
              className={
                activeSidebar === "salereport"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("salereport")}
            >
              <FaChartLine /> <span>Sales Report</span>
            </li>
            <li
              className={
                activeSidebar === "messages"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("messages")}
            >
              <FaEnvelope /> <span>Messages</span>
            </li>
            <li
              className={
                activeSidebar === "setting"
                  ? "flex items-center space-x-3 p-2 text-white bg-purple-600 rounded cursor-pointer"
                  : "flex items-center space-x-3 p-2 hover:text-white hover:bg-purple-600 rounded cursor-pointer"
              }
              onClick={() => setActiveSidebar("setting")}
            >
              <FaCog /> <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sign Out Button */}
      <div className="p-4">
        <button className="flex items-center space-x-3 p-2 w-full text-left hover:bg-purple-600 rounded">
          <FaSignOutAlt /> <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
