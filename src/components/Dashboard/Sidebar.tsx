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
      className={`${collapsed ? "w-28" : "w-64"} bg-white h-screen flex flex-col py-5 shadow-lg  transition-all sticky top-0 left-0 duration-500 ease-in-out transform overflow-hidden scrollbar-custom`}
    >
      {/* Logo */}
      <div className="mb-4 mx-auto">
        <button onClick={toggleSidebar} className="text-3xl">
          {collapsed ? (
            <img src={svgLogo} alt="Logo" className="mt-4 w-12 h-12" />
          ) : (
            <div className="flex items-center gap-x-4">
              <img src={logo} alt="Logo" className="p-5" />
              <FaTimes className="text-4xl text-deep-orange-300" />
            </div>
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col justify-center overflow-y-auto">
        <div className="mx-auto">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="my-3 text-md flex items-center"
            >
              <div
                className={`text-2xl text-SecondPrimary hover:shadow-lg hover:shadow-gray-500 hover:text-deep-orange-300 transition-shadow duration-300 p-4 rounded-xl`}
              >
                {item.icon}
              </div>
              {!collapsed && (
                <span className="text-lg text-SecondPrimary font-medium">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div
        className={`flex items-center cursor-pointer ${collapsed ? "justify-center" : "ml-3 justify-start"}`}
        onClick={handleLogout}
      >
        <div className="text-2xl text-red p-4 rounded-xl">
          <FaSignOutAlt />
        </div>
        {!collapsed && (
          <span className="text-lg text-SecondPrimary font-medium text-center">
            Logout
          </span>
        )}
      </div>

    </div>

  );
};

export default Sidebar;
