import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { selectUserRole } from "../../redux/auth/authSlice";
import { sidebarItems } from "./SidebarItems";
import svgLogo from "../../assets/landingPage/SvgLogo/logo.svg";
import logo from "../../assets/landingPage/footerLogo.png";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  //! Ensure userRole is one of the valid keys
  const userRole = useSelector(selectUserRole) as "admin" | "contestHolder" | "user" | undefined;

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const menuItems = userRole ? sidebarItems[userRole] : [];

  return (
    <div
      className={`${
        collapsed ? "w-28" : "w-64 px-6"
      } bg-white min-h-screen flex flex-col py-10 shadow-sm transition-all duration-500 ease-in-out transform ${
        collapsed ? "translate-x-0" : "translate-x-0"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`mb-6 text-3xl flex items-center ${
          collapsed ? "justify-center" : "justify-start"
        }`}
      >
        {collapsed ? (
          <span>
            <img
              src={svgLogo}
              alt=""
              className="w-14 h-14 hover:scale-110 transition-transform duration-500"
            />
          </span>
        ) : (
          <div className="text-2xl text-orange flex items-center">
            <img src={logo} alt="" className="p-4" />
            <FaTimes className="text-4xl text-SecondPrimary" />
          </div>
        )}
      </button>

      {/* Sidebar Items */}
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`my-2 text-md flex items-center ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className="mr-2 text-2xl text-SecondPrimary hover:shadow-lg hover:shadow-gray-500 hover:text-deep-orange-300 transition-shadow duration-300 p-4 rounded-xl"
          >
            {item.icon}
          </div>
          {!collapsed && (
            <span className="text-lg text-SecondPrimary font-medium">{item.label}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
