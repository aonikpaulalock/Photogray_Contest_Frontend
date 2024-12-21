/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiNumbersFill } from "react-icons/ri";
import { FaCircle, FaEye, FaFlag, FaTimesCircle, FaTrash, FaUserAlt } from "react-icons/fa";
import Pagination from "../../../components/pagination/Pagination";
import deleteEntity from "../../../utils/deleteEntity";
import { TUser } from "../../../types";
import { useDeleteUserMutation, useGetAllUserQuery, useUpdateUserStausMutation } from "../../../redux/feature/user/userApi";
import { BiEnvelope } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { toast } from "sonner";

const ManageUser = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data, refetch } = useGetAllUserQuery({
    page: page,
    limit: 4,
  });
  console.log(data)

  
  const metaData = data?.meta;
  const [updateUserStatus] = useUpdateUserStausMutation();
  const [userDelete] = useDeleteUserMutation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleStatusChange = async (userId: string, currentStatus: string) => {
    const toastId = toast.loading("Please wait...");
    const newStatus = currentStatus === 'active' ? 'blocked' : 'active';
    try {
      const res = await updateUserStatus({
        userId,
        data: { status: newStatus }
      }).unwrap();
      if (res?.success) {
        toast.success(res?.message, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(res?.data?.errorDetails?.message || "Update failed.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error('Failed to update user status:', error);
    }
  };

  const deleteUser = async (userId: string) => {
    await deleteEntity(
      userId,
      userDelete,
      "User has been deleted.",
      "Something went wrong!"
    );

    if (data?.data?.length === 1 && page > 1) {
      setPage(page - 1);
    } else {
      refetch();
    }

    setOpenDropdown(null);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
          <tr>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Username</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Email</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Designation</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Country</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Image</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Status</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user: TUser, index: number) => (
            <tr key={user._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
              {/* Serial */}
              <td className="p-4 text-blue-gray-700 font-bold">
                <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
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

              <td className="p-4">
                <div>
                  <FaFlag className="inline mr-2 text-lg text-secondary " />
                  <span className="text-blue-gray-500 font-poppins font-semibold">{user?.country}</span>
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



              {/* Actions */}
              <td className="p-2 relative text-center">
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <BsThreeDots className="text-xl" />
                  </button>
                  {openDropdown === index && (
                    <div
                      className={`absolute ${index === data?.data?.length - 1 ? "-bottom-2" : "-top-2"
                        } right-16 bg-white shadow-md rounded-lg w-30 p-1`}
                    >
                      <ul>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => deleteUser(user?._id)}>
                          <FaTrash className="mr-2 text-red" /> Delete
                        </li>
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => navigate(`/dashboard/${user?.role}/submissionDetails/${user._id}`)}>
                          <FaEye className="mr-2 text-green" /> Details
                        </li>
                        <li
                          className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => handleStatusChange(user._id, user.status)}
                        >
                          {user.status === 'active' ? (
                            <>
                              <FaTimesCircle className="mr-2 text-red" />
                              Block
                            </>
                          ) : (
                            <>
                              <FaCircle className="mr-2 text-green" />
                              Unblock
                            </>
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}

      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </div>
  );
};

export default ManageUser;
