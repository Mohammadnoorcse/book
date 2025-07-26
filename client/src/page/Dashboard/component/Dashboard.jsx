import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const data = [
    { name: "Monday", OnlineSales: 4000, OfflineSales: 2400 },
    { name: "Tuesday", OnlineSales: 3000, OfflineSales: 1398 },
    { name: "Wednesday", OnlineSales: 2000, OfflineSales: 9800 },
    { name: "Thursday", OnlineSales: 2780, OfflineSales: 3908 },
    { name: "Friday", OnlineSales: 1890, OfflineSales: 4800 },
    { name: "Saturday", OnlineSales: 2390, OfflineSales: 3800 },
    { name: "Sunday", OnlineSales: 3490, OfflineSales: 4300 },
  ];

  const data2 = [
    { name: "Monday", OnlineSales: 2400, OfflineSales: 2400 },
    { name: "Tuesday", OnlineSales: 1398, OfflineSales: 2210 },
    { name: "Wednesday", OnlineSales: 9800, OfflineSales: 2290 },
    { name: "Thursday", OnlineSales: 3908, OfflineSales: 2000 },
    { name: "Friday", OnlineSales: 4800, OfflineSales: 2181 },
    { name: "Saturday", OnlineSales: 3800, OfflineSales: 2500 },
    { name: "Sunday", OnlineSales: 4300, OfflineSales: 2100 },
  ];

  const pieData = [
    { name: "Excellent", value: 400 },
    { name: "Good", value: 300 },
    { name: "Average", value: 300 },
    { name: "Poor", value: 200 },
  ];

  const topProductsData = [
    { id: 1, name: "Home Decor Range", popularity: 45, sales: "45%" },
    {
      id: 2,
      name: 'Disney Princess Pink Bag 18"',
      popularity: 29,
      sales: "29%",
    },
    { id: 3, name: "Bathroom Essentials", popularity: 18, sales: "18%" },
    { id: 4, name: "Apple Smartwatches", popularity: 25, sales: "25%" },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#82ca9d",
    "#8884d8",
  ];

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Today's Sales</h2>
          <button className="text-blue-500 font-semibold">Export</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Sales */}
          <div className="p-4 rounded-lg bg-pink-100 flex flex-col items-start">
            <div className="text-2xl mb-2">
              <i className="fas fa-dollar-sign text-pink-500"></i>
            </div>
            <h3 className="text-lg font-semibold">$1k</h3>
            <p className="text-gray-500">Total Sales</p>
            <p className="mt-2 text-sm text-pink-500">+8% from yesterday</p>
          </div>

          {/* Card 2: Total Order */}
          <div className="p-4 rounded-lg bg-yellow-100 flex flex-col items-start">
            <div className="text-2xl mb-2">
              <i className="fas fa-shopping-cart text-yellow-500"></i>
            </div>
            <h3 className="text-lg font-semibold">300</h3>
            <p className="text-gray-500">Total Order</p>
            <p className="mt-2 text-sm text-yellow-500">+5% from yesterday</p>
          </div>

          {/* Card 3: Product Sold */}
          <div className="p-4 rounded-lg bg-green-100 flex flex-col items-start">
            <div className="text-2xl mb-2">
              <i className="fas fa-check-circle text-green-500"></i>
            </div>
            <h3 className="text-lg font-semibold">5</h3>
            <p className="text-gray-500">Product Sold</p>
            <p className="mt-2 text-sm text-green-500">+12% from yesterday</p>
          </div>

          {/* Card 4: New Customers */}
          <div className="p-4 rounded-lg bg-purple-100 flex flex-col items-start">
            <div className="text-2xl mb-2">
              <i className="fas fa-user-plus text-purple-500"></i>
            </div>
            <h3 className="text-lg font-semibold">8</h3>
            <p className="text-gray-500">New Customers</p>
            <p className="mt-2 text-sm text-purple-500">0.2% from yesterday</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between space-x-4 mt-4">
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />{" "}
              {/* Legend positioned at the top */}
              <Bar dataKey="OnlineSales" fill="#8884d8" />
              <Bar dataKey="OfflineSales" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />{" "}
              {/* Legend positioned at the top */}
              <Line type="monotone" dataKey="OnlineSales" stroke="#8884d8" />
              <Line type="monotone" dataKey="OfflineSales" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Target vs Reality */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h3 className="text-lg font-semibold mb-4">Target vs Reality</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />{" "}
              {/* Legend positioned at the top */}
              <Bar dataKey="OnlineSales" fill="#ffc658" />
              <Bar dataKey="OfflineSales" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Top Products */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Products</h3>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 text-left">#</th>
                <th className="py-2 text-left">Name</th>
                <th className="py-2 text-left">Popularity</th>
                <th className="py-2 text-left">Sales</th>
              </tr>
            </thead>
            <tbody>
              {topProductsData.map((product) => (
                <tr key={product.id}>
                  <td className="py-2">{product.id}</td>
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">
                    <div className="relative w-full bg-gray-200 rounded-full">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                        style={{ width: `${product.popularity}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-2">{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Customer Satisfaction (Pie Chart) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />{" "}
              {/* Legend positioned at the top */}
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Target vs Reality (Line Chart) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Target vs Reality</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />{" "}
              {/* Legend positioned at the top */}
              <Line type="monotone" dataKey="OnlineSales" stroke="#8884d8" />
              <Line type="monotone" dataKey="OfflineSales" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* table */}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <div>
            <button
              id="dropdownActionButton"
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {showDropdown && (
              <div
                id="dropdownAction"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Reward
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Promote
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Activate account
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete User
                  </a>
                </div>
              </div>
            )}
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Seller Type
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="Neil Sims"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Roki</div>
                  <div className="font-normal text-gray-500">
                    mroki815@gmail.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">Book</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                  Online
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setShowEditModal(true)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </button>
              </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="Neil Sims"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Aminur</div>
                  <div className="font-normal text-gray-500">
                    aminur@gmail.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">Buaty Product</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                  Online
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => setShowEditModal(true)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </button>
              </td>
            </tr>
            {/* Repeat the above <tr> for other users */}
          </tbody>
        </table>

        {/* Edit user modal */}
        {showEditModal && (
          <div
            id="editUserModal"
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full"
            tabIndex="-1"
          >
            <div className="relative w-full max-w-2xl max-h-full">
              <form className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Edit user
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setShowEditModal(false)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 12 12M13 1 1 13"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bonnie"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Green"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="company"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Flowbite"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="e.g. +(12)3456 789"
                        required
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="department"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Department
                      </label>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Development"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save all
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
