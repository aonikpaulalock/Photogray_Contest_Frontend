import { FaBell } from "react-icons/fa";
import Avatar from "../../assets/landingPage/Ellipse 1.png"
const NavIcon = () => {
  return (
    <div className="flex items-center space-x-7">
      {/* Notification Icon */}
      <FaBell color="#F582AE" className="cursor-pointer hidden sm:block w-5 h-5" />
      {/* User Avatar */}
      <div>
        <img
          src={Avatar}
          alt="User Avatar"
          className="w-12 h-12 flex items-center cursor-pointer"
        />
      </div>
    </div>
  )
};

export default NavIcon;