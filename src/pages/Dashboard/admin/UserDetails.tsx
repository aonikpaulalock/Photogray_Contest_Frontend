import { useParams } from "react-router-dom";
import { useGetSingleUserQuery } from "../../../redux/feature/user/userApi";

const UserDetails = ({ role }: { role: string }) => {
  const { userId } = useParams()
  const { data: user } = useGetSingleUserQuery(userId as string)
  console.log(role)
  return (

    <div className="flex justify-center items-center mt-10">
      <div className="bg-white mx-auto p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="">
          <div className="w-60 h-80 flex justify-center items-centerp-2 rounded-lg">
            <img
              src={user?.data?.profileImage}
              alt="Profile"
              className="mx-auto rounded-full text-center ring-2 ring-secondary"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div>
            {/* Hello Section */}
            <div className="mb-4">
              <span className="bg-secondary text-white text-sm font-bold py-2 px-5 rounded-md">
                HELLO
              </span>
              <h1 className="text-xl text-primary font-bold mt-4">I'm
                <span className="text-2xl text-SecondPrimary ml-1">
                  {user?.data?.username}
                </span>
              </h1>
              <p className="text-secondary text-md">{user?.data?.designation}</p>
            </div>


            {/* Personal Details */}
            <div className="text-sm">
              <div>
                <p className="font-semibold text-primary">Country</p>
                <p className="text-SecondPrimary font-medium">{user?.data?.country}</p>
              </div>
              <div className="my-4">
                <p className="font-semibold text-primary">Email</p>
                <p className="text-SecondPrimary font-medium">{user?.data?.email}</p>
              </div>
            </div>
            <div className="my-4">
              <p className="font-semibold text-primary">Bio</p>
              <p className="text-SecondPrimary">{user?.data?.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default UserDetails;