import { FaBell,FaUser, FaSignOutAlt } from "react-icons/fa";
import Avatar from "../../assets/landingPage/Ellipse 1.png"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { currentUser, logout } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonLoading from "../Loading/ButtonLoading";
import { useGetMeUserQuery } from "../../redux/feature/user/userApi";
const NavIcon = () => {
  const { data, isLoading } = useGetMeUserQuery(undefined)
  const dispatch = useAppDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()
  const user = useAppSelector(currentUser);
  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  };
  if (isLoading) {
    return <ButtonLoading />;
  }
  return (
    <div className="">
      {
        user ?
          <div className="relative flex items-center space-x-7">
            <FaBell color="#F582AE" className="cursor-pointer hidden sm:block w-5 h-5" />
            <div>
              <img
                src={data?.data?.profileImage || Avatar}
                alt="User Avatar"
                className="w-12 h-12 object-cover rounded-full cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
            </div>

            {dropdownOpen && (
              <div className="absolute top-10 left-0 mt-3 w-30 bg-white border border-secondary rounded-xl shadow-lg">
                <ul className="py-1">
                  <li
                    className="flex items-center px-3 py-1 cursor-pointer"
                    onClick={() => navigate(`/dashboard/${user?.role}/profile`)}
                  >
                    <FaUser className="w-4 h-4 text-green mr-2" />
                    Profile
                  </li>
                  <li
                    className="flex items-center px-3 py-1 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="w-4 h-4 text-red mr-2" />
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div> :
          <button className="relative inline-flex items-center justify-center px-5 py-2 text-white font-bold bg-secondary border-4 border-white/30 rounded-full shadow-lg gap-2 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:border-white/50 group"
            onClick={() => navigate("/register")}
          >
            Sign Up
            <svg
              className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2a10 10 0 1 1-10 10 10.013 10.013 0 0 1 10-10zm0 18a8 8 0 1 0-8-8 8.009 8.009 0 0 0 8 8zm1-13h-2v5H8l4 4 4-4h-3z"
              ></path>
            </svg>
            <span className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full"></span>
          </button>
      }
    </div>
  )
};

export default NavIcon;