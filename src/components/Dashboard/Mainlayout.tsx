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
    <div className="flex h-screen overflow-hidden">
      <div
        className={`fixed z-30 md:static ${isSidebarVisible ? "block" : "hidden"
          } md:block h-screen`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-lightBlue">
        <DahboardHeader onToggleSidebar={toggleSidebar} />
        <div className="sm:p-6 p-3 flex-1 overflow-y-auto">
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
