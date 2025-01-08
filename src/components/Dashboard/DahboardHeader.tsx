import chatLogo from "../../assets/landingPage/SvgLogo/chat.svg"
import notificationLogo from "../../assets/landingPage/SvgLogo/notification.svg"
import { useGetMeUserQuery } from "../../redux/feature/user/userApi";
import logo from "../../assets/landingPage/LOGO.png"
import ButtonLoading from "../Loading/ButtonLoading";
const DahboardHeader = () => {
  const { data, isLoading } = useGetMeUserQuery(undefined)
  if (isLoading) {
    return <ButtonLoading />;
  }
  return (
    <div className="flex justify-between items-center p-2 bg-transparent">
      <div className="relative">
        <div className="text-2xl text-orange flex items-center cursor-pointer">
          <img src={logo} alt="" className="" />
        </div>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          <img src={chatLogo} alt="" className="w-14 h-14" />
        </div>
        <div>
          <img src={notificationLogo} alt="" className="w-14 h-14" />
        </div>
        {data?.data && (
          <div className="flex items-center gap-4 ml-2">
            <img
              src={data?.data?.profileImage
                || "https://via.placeholder.com/40"}
              alt="User Avatar"
              className="w-14 h-14 object-cover rounded-full bg-SecondPrimary ring-2 ring-SecondPrimary"
            />
            <div>
              <p className="text-SecondPrimary font-semibold text-lg mb-1">{data?.data?.username || "Anonymous"}</p>
              <p className="text-sm text-blue-gray-500 font-medium uppercase">{data?.data?.role || "User"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default DahboardHeader;