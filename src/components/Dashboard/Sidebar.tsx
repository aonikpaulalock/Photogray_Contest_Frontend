import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout, selectUserRole } from "../../redux/auth/authSlice";
import { sidebarItems } from "./SidebarItems";
import svgLogo from "../../assets/landingPage/SvgLogo/logo.svg";
import logo from "../../assets/landingPage/footerLogo.png";
import { FaTimes, FaSignOutAlt } from "react-icons/fa";
import { useAppDispatch } from "../../redux/hooks";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  //! Ensure userRole is one of the valid keys
  const userRole = useSelector(selectUserRole) as "admin" | "contestHolder" | "user" | undefined;

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const menuItems = userRole ? sidebarItems[userRole] : [];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className={`${collapsed ? "w-32" : "w-64 px-5"}
      bg-white h-screen flex flex-col py-5 shadow-lg 
      transition-all sticky top-0 left-0 duration-500 ease-in-out transform 
      overflow-hidden scrollbar-custom`}
    >
      {/* Logo Section - Fixed */}
      <div className="sticky top-0 z-10 mb-4 flex items-center justify-center">
        <button
          onClick={toggleSidebar}
          className={`text-3xl flex items-center ${collapsed ? "justify-center" : "justify-start"}`}
        >
          {collapsed ? (
            <img
              src={svgLogo}
              alt="Logo"
              className="mt-4 w-12 h-12 hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="text-2xl text-orange flex items-center">
              <img src={logo} alt="Logo" className="p-4" />
              <FaTimes className="text-4xl text-deep-orange-300" />
            </div>
          )}
        </button>
      </div>

      {/* Sidebar Items Section - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`my-3 text-md flex items-center ${collapsed ? "justify-center" : "justify-start"}`}
          >
            <div className={`
            text-2xl text-SecondPrimary hover:shadow-lg hover:shadow-gray-500 hover:text-deep-orange-300 transition-shadow duration-300 p-4 rounded-xl
            ${collapsed ? "mr-0" : "mr-2"}
            
              `}>
              {item.icon}
            </div>
            {!collapsed && (
              <span className="text-lg text-SecondPrimary font-medium">{item.label}</span>
            )}
          </Link>
        ))}
      </div>

      {/* Logout Section */}
      <div
        className={`py-2 flex items-center cursor-pointer ${collapsed ? "justify-center" : "justify-start"}`}
        onClick={handleLogout}
      >
        <div className="mr-2 text-2xl text-red transition-shadow duration-300 p-4 hover:shadow-lg hover:shadow-gray-500 hover:text-deep-orange-500 rounded-xl">
          <FaSignOutAlt />
        </div>
        {!collapsed && (
          <span className="text-lg text-SecondPrimary font-medium">Logout</span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
