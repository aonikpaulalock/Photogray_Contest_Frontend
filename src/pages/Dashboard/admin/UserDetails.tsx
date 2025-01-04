import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../redux/feature/user/userApi";

const UserDetails = ({ role }: { role: string }) => {
  const { userId } = useParams()
  const { data: user } = useGetSingleUserQuery(userId as string)
  console.log(role)
  return (

    <div className="flex justify-center items-center mt-8">
      <div className="bg-white mx-auto p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="">
          <div className="p-2 rounded-lg">
            <img
              src={user?.data?.profileImage}
              alt="Profile"
              className="w-60 mx-auto rounded-full text-center ring-2 ring-amber-800"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div>
            {/* Hello Section */}
            <div className="mb-4">
              <span className="bg-[#ffc107] text-white text-sm font-bold py-1 px-4 rounded-md">
                HELLO
              </span>
              <h1 className="text-2xl font-bold mt-4">I'm {user?.data?.username}</h1>
              <p className="text-gray-600 text-md">{user?.data?.designation}</p>
            </div>


            {/* Personal Details */}
            <div className="text-sm">
              <div>
                <p className="font-semibold">Country</p>
                <p>{user?.data?.country}</p>
              </div>
              <div className="my-4">
                <p className="font-semibold">Email</p>
                <p>{user?.data?.email}</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold">Bio</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {user?.data?.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default UserDetails;