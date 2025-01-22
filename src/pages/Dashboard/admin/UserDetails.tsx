import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../redux/feature/user/userApi";

const UserDetails = ({ role }: { role: string }) => {
  const { userId } = useParams()
  const { data: user } = useGetSingleUserQuery(userId as string)
  console.log(role)
  return (

<div className="flex justify-center items-center mt-10 sm:px-4 px-2">
  <div className="bg-white w-full max-w-4xl sm:p-8 p-4 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Left Section */}
    <div className="flex justify-center items-center">
      <div className="w-80 h-80 md:w-[380px] md:h-[380px] flex justify-center items-center p-2 rounded-full overflow-hidden ring-4 ring-secondary">
        <img
          src={user?.data?.profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col justify-center">
      {/* Hello Section */}
      <div className="mb-6">
        <span className="bg-secondary text-white text-sm font-bold py-2 px-5 rounded-md">
          HELLO
        </span>
        <h1 className="text-2xl text-primary font-bold mt-4">
          I'm
          <span className="text-2xl text-SecondPrimary ml-1">
            {user?.data?.username || "Guest User"}
          </span>
        </h1>
        <p className="text-secondary text-md mt-1">
          {user?.data?.designation || "Your Designation"}
        </p>
      </div>

      {/* Personal Details */}
      <div className="text-sm">
        <div className="mb-4">
          <p className="font-semibold text-primary">Country</p>
          <p className="text-SecondPrimary font-medium">
            {user?.data?.country || "Not Provided"}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-primary">Email</p>
          <p className="text-SecondPrimary font-medium">
            {user?.data?.email || "Not Provided"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-primary">Bio</p>
          <p className="text-SecondPrimary">
            {user?.data?.bio || "No Bio Available"}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  )
};

export default UserDetails;