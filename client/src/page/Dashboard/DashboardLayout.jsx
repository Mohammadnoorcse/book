import React, { useState } from "react";
import Dashboard from "./component/Dashboard";
import DashboardProduct from "./component/DashboardProduct";
import DashboardleaderBoard from "./component/DashboardleaderBoard";
import DashboardOrder from "./component/DashboardOrder";
import DashboardSaleReport from "./component/DashboardSaleReport";
import DashboardMessage from "./component/DashboardMessage";
import DashboardSetting from "./component/DashboardSetting";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";

const DashboardLayout = () => {
  const [activeSidebar, setActiveSidebar] = useState("deshboard");
  const renderView = () => {
    switch (activeSidebar) {
      case "deshboard":
        return <Dashboard />;
      case "leaderboard":
        return <DashboardleaderBoard />;
      case "order":
        return <DashboardOrder />;
      case "product":
        return <DashboardProduct />;
      case "salereport":
        return <DashboardSaleReport />;
      case "messages":
        return <DashboardMessage />;
      case "setting":
        return <DashboardSetting/>;
      default:
        return <h1>404 Not Found</h1>;
    }
  };
  return (
    <div>
      <div className="flex ">
        <Sidebar
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
        />
        <div className="flex-grow">
          <NavBar />
          <div className="p-6">{renderView()}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
