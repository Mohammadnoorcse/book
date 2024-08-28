import React from 'react'
import Sidebar from './SideBar'
import NavBar from './NavBar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <NavBar />
        <div className="p-6">{children}</div>
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout
