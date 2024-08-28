import React from 'react';
import { FaHome, FaTrophy, FaClipboardList, FaBox, FaChartLine, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="h-screen bg-purple-700 text-white flex flex-col justify-between">
      <div className="p-4">
        {/* Logo */}
        <div className="text-2xl font-bold mb-10">
          <span className="text-white">Dabang</span>
        </div>

        {/* Menu Items */}
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
              <FaHome /> <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
              <FaTrophy /> <span>Leaderboard</span>
            </li>
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
              <FaClipboardList /> <span>Order</span>
            </li>
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
              <FaBox /> <span>Products</span>
            </li>
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
              <FaChartLine /> <span>Sales Report</span>
            </li>
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
              <FaEnvelope /> <span>Messages</span>
            </li>
            <li className="flex items-center space-x-3 p-2 hover:bg-purple-600 rounded">
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
