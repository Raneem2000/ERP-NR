import React from "react";
import SideBar from "../../components/Dashboard/SideBar";
import TopBar from "../../components/Dashboard/TopBar";

import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="position-relative dashboard ">
      <TopBar />
      <div
        className="d-flex  gap-1"
        style={{ marginTop: "100px", maxHeight: "calc(100vh - 100px)" }}
      >
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
