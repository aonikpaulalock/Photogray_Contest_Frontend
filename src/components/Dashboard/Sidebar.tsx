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
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  //! Ensure userRole is one of the valid keys
  const userRole = useSelector(selectUserRole) as "admin" | "contestHolder" | "user" | undefined;

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const menuItems = userRole ? sidebarItems[userRole] : [];

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  };

  return (
    <div
      className={`${collapsed ? "w-28" : "w-64 px-6"
        } bg-white min-h-screen flex flex-col py-10 shadow-sm transition-all duration-500 ease-in-out transform`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`mb-6 text-3xl flex items-center ${collapsed ? "justify-center" : "justify-start"
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
            <FaTimes className="text-4xl text-deep-orange-300" />
          </div>
        )}
      </button>

      {/* Sidebar Items */}
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`my-2 text-md flex items-center ${collapsed ? "justify-center" : "justify-start"
            }`}
        >
          <div className="mr-2 text-2xl text-SecondPrimary hover:shadow-lg hover:shadow-gray-500 hover:text-deep-orange-300 transition-shadow duration-300 p-4 rounded-xl">
            {item.icon}
          </div>
          {!collapsed && (
            <span className="text-lg text-SecondPrimary font-medium">{item.label}</span>
          )}
        </Link>
      ))}

      {/* Logout Section */}
      <div
        className={`mt-auto py-2 flex items-center cursor-pointer  ${collapsed ? "justify-center" : "justify-start"
          }`}
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
