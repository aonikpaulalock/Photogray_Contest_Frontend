/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { RiNumbersFill } from "react-icons/ri";
import { FaCircle, FaTimesCircle, FaUserAlt } from "react-icons/fa";
import { TUser } from "../../../types";
import { BiEnvelope } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import Loading from "../../../components/Loading/Loading";
import NoContent from "../../../components/Loading/NoContent";
import { useGetContestsParticipationQuery } from "../../../redux/feature/contestHolder/contestHolderApi";
import Pagination from "../../../components/pagination/Pagination";
import { useState } from "react";

const AllParticipant = ({ role }: { role: string }) => {
  console.log(role)
  const { contestId } = useParams()
  const [page, setPage] = useState(1);
  const limit = 4;

  const { data, isLoading } = useGetContestsParticipationQuery({
    contestId,
    page,
    limit
  });

  const title = data?.data?.title

  const totalPages = Math.ceil((data?.meta?.totalParticipants || 0) / limit);

  return (
    <div className="p-4">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
          <tr>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Contest Name</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Username</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Email</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Designation</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Image</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={12} className="text-center p-6">
                <Loading />
              </td>
            </tr>
          ) : data?.data?.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center p-6">
                <NoContent message="No user found!" />
              </td>
            </tr>
          ) : (
            data?.data?.participantsID?.map((user: TUser, index: number) => (
              <tr key={user._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
                {/* Serial */}
                <td className="p-4 text-blue-gray-700 font-bold">
                  <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
                </td>

                <td className="p-4">
                  <div>
                    <MdWorkOutline className="inline mr-2 text-lg text-secondary " />
                    <span className="text-blue-gray-500 font-poppins font-semibold">{title}</span>
                  </div>
                </td>

                {/* Date */}
                <td className="p-4 text-blue-gray-400 font-medium">
                  <FaUserAlt className="inline mr-2 text-md text-secondary" />
                  {user?.username}
                </td>

                {/* Blog Name */}
                <td className="p-4 text-blue-gray-500 font-poppins font-medium ">
                  <BiEnvelope className="inline mr-2 text-lg text-secondary" /> {user?.email}
                </td>

                {/* Email */}
                <td className="p-4">
                  <div>
                    <MdWorkOutline className="inline mr-2 text-lg text-secondary " />
                    <span className="text-blue-gray-500 font-poppins font-semibold">{user?.designation}</span>
                  </div>
                </td>

                {/* Image */}
                <td className="p-4 text-gray-500">
                  <img className="w-12 h-12 object-cover rounded-full" src={user?.profileImage} alt="" />
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {user?.status === "active" ? (
                      <>
                        <FaCircle className="text-[#28A745] text-xs rounded-full" /> {/* Routed Circle for Active */}
                        <span className="text-[#28A745] font-semibold">Active</span>
                      </>
                    ) : (
                      <>
                        <FaTimesCircle className="text-[#DC3545] text-sm" /> {/* Blocked Red Icon */}
                        <span className="text-[#DC3545] font-poppins font-semibold">Blocked</span>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
      {/* Modal */}

      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={limit}
        total={totalPages}
      />
    </div>
  );
};

export default AllParticipant;
