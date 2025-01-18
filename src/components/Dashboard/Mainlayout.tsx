import { useState } from "react";
import { Outlet } from "react-router-dom";
import DahboardHeader from "./DahboardHeader";
import Sidebar from "./Sidebar";

const Mainlayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar - Conditionally rendered */}
      <div
        className={`fixed z-30 md:static ${
          isSidebarVisible ? "block" : "hidden"
        } md:block`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-lightBlue">
        <DahboardHeader onToggleSidebar={toggleSidebar} />
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* Overlay for small screens */}
      {isSidebarVisible && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Mainlayout;
