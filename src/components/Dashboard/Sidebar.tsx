// In your Sidebar component
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectUserRole } from "../../redux/auth/authSlice";
import { sidebarItems } from "./SidebarItems";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  // Ensure userRole is one of the valid keys
  const userRole = useSelector(selectUserRole) as "admin" | "contestHolder" | "user" | undefined;
  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  // Ensure menuItems is safely derived from sidebarItems based on userRole
  const menuItems = userRole ? sidebarItems[userRole] : [];
  return (
    <div className={`${collapsed ? "w-20" : "w-60 px-6"} bg-white min-h-screen flex flex-col py-12 shadow-md transition-all duration-300 ease-in-out`}>
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className={`mb-6 text-3xl flex items-center ${collapsed ? "justify-center" : "pl-2 justify-start"}`}>
        {collapsed ? <span className="text-2xl text-orange">☰</span> : <span className="text-2xl text-orange">Photography</span>}
      </button>

      {/* Sidebar Items */}
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} className={`my-4 text-md flex items-center ml-3 ${collapsed ? "justify-center" : "justify-start"}`}>
          <div className="mr-3 text-xl">{item.icon}</div>
          {!collapsed && <span className="text-xl">{item.label}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
