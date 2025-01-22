import { FaBars } from "react-icons/fa"; // Icon for sidebar toggle
import chatLogo from "../../assets/landingPage/SvgLogo/chat.svg";
import notificationLogo from "../../assets/landingPage/SvgLogo/notification.svg";
import { useGetMeUserQuery } from "../../redux/feature/user/userApi";
import logo from "../../assets/landingPage/LOGO.png";
import ButtonLoading from "../Loading/ButtonLoading";
import { useNavigate } from "react-router-dom";

const DahboardHeader = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeUserQuery(undefined);

  if (isLoading) {
    return <ButtonLoading />;
  }

  return (
    <div className="sticky top-0 left-0 z-20 bg-transparent sm:p-8 p-4 flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <div
        className="text-2xl text-orange flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Logo" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <div className="lg:block hidden">
          <img src={chatLogo} alt="Chat" className="w-14 h-14" />
        </div>
        <div className="lg:block hidden">
          <img src={notificationLogo} alt="Notifications" className="w-14 h-14" />
        </div>
        {data?.data && (
          <div className="flex items-center gap-4 ml-2">
            <img
              src={data?.data?.profileImage || "https://via.placeholder.com/40"}
              alt="User Avatar"
              className="w-14 h-14 md:object-cover rounded-full bg-SecondPrimary ring-2 ring-SecondPrimary"
            />
            <div className="md:block hidden">
              <p className="text-SecondPrimary font-semibold text-lg mb-1">
                {data?.data?.username || "Anonymous"}
              </p>
              <p className="text-sm text-blue-gray-500 font-medium uppercase">
                {data?.data?.role || "User"}
              </p>
            </div>
          </div>
        )}
        <div className="md:ml-0 ml-4 block md:hidden">
          <button
            onClick={onToggleSidebar}
            className="text-4xl text-deep-orange-500 sm:p-2 p-0"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DahboardHeader;
