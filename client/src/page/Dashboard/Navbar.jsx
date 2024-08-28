import React from 'react'

function NavBar() {
  return (
    <div>
      <div className="bg-sky-50 flex items-center justify-between px-8 py-4 shadow-md">
      <div className="text-2xl font-semibold">Dashboard</div>
      
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="px-4 py-2 rounded-full border focus:outline-none"
          />
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
            alt="US Flag"
            className="w-6 h-4 rounded"
          />
          <span>Eng (US)</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Roki</span>
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar
