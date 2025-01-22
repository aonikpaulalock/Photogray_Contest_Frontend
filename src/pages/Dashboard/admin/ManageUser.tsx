/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RiNumbersFill } from "react-icons/ri";
import { FaCircle, FaEye, FaFlag, FaTimesCircle, FaTrash, FaUserAlt } from "react-icons/fa";
import SearchIcon from "../../../assets/landingPage/SvgLogo/Research.svg"
import Pagination from "../../../components/pagination/Pagination";
import deleteEntity from "../../../utils/deleteEntity";
import { TUser } from "../../../types";
import { useDeleteUserMutation, useGetAllUserQuery, useUpdateUserStausMutation } from "../../../redux/feature/user/userApi";
import { BiEnvelope } from "react-icons/bi";
import { toast } from "sonner";
import Loading from "../../../components/Loading/Loading";
import NoContent from "../../../components/Loading/NoContent";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";

const ManageUser = () => {
  const userRole = useAppSelector(currentUser);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");

  const { data, refetch, isLoading } = useGetAllUserQuery({
    page: page,
    limit: 3,
    searchTerm,
    sort
  });


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
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Update failed.";
      toast.error(
        errorMessage,
        { id: toastId }
      );
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
    <div className="sm:p-4 p-2 overflow-y-auto">
      <div className="flex flex-col items-center mb-4">
        <div className="relative sm:flex items-center sm:space-x-4 sm:space-y-0 space-y-3 mb-2 w-full max-w-xl">
          {/* Search Bar */}
          <div className="relative flex-1">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Here..."
              className="border-none rounded-xl p-4 pl-12 w-full text-SecondPrimary outline-none"
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
            />
          </div>

          {/* Sorting Dropdown */}
          <select
            className="p-4 rounded-xl outline-none text-gray-500 cursor-pointer sm:w-auto w-full"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="" disabled>
              Sorting
            </option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto xs:min-w-full w-[280px]">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
            <tr>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Username</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Email</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Country</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Image</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Status</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
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
              data?.data?.map((user: TUser, index: number) => (
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
                              onClick={() => navigate(`/dashboard/${userRole?.role}/userDetails/${user._id}`)}>
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
              ))
            )}
          </tbody>

        </table>
      </div>
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
