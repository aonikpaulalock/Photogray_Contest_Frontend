import { useState } from "react";
import moment from "moment";
import { FaEdit, FaTrash, FaEye, FaRegClock, FaCheckCircle, FaTimesCircle, FaTag, FaUsers } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { TPhotographyContest } from "../../../types";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import { BiBook } from "react-icons/bi";
import { RiNumbersFill } from "react-icons/ri";
import Pagination from "../../../components/pagination/Pagination";
import { useDeleteContestMutation, useGetAllContestsQuery } from "../../../redux/feature/contestHolder/contestHolderApi";
import ContestUpdate from "./ContestUpdate";
import deleteEntity from "../../../utils/deleteEntity";
import Loading from "../../../components/Loading/Loading";
import NoContent from "../../../components/Loading/NoContent";

const ContestHolderContest = ({ role }: { role: string }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const user = useAppSelector(currentUser);
  const { data: contests, refetch, isLoading } = useGetAllContestsQuery(
    {
      page: page,
      limit: 4,
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  console.log(contests)
  const metaData = contests?.meta;
  const [deleteContest] = useDeleteContestMutation();

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedContest, setSelectedContest] = useState<TPhotographyContest | null>(null);
  const toggleDropdown = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const deleteByContest = async (contestId: string) => {
    await deleteEntity(
      contestId,
      deleteContest,
      "Your contest has been deleted.",
      "Something went wrong!"
    );

    if (contests?.data?.length === 1 && page > 1) {
      setPage(page - 1);
    } else {
      refetch();
    }

    setOpenDropdown(null);
  };

  // Function to open modal and set selected blog
  const openUpdateModal = (contest: TPhotographyContest) => {
    setSelectedContest(contest);
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContest(null);
  };

  return (
    <div className="sm:p-6 p-2">
      <div className="overflow-x-auto xs:min-w-full w-[280px]">
        <table className="w-full overflow-hidden border-collapse rounded-lg shadow-lg bg-white">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
            <tr>
              <th className="p-5 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Create Date</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Contest Name</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Price</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Deadline</th>
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
            ) : contests?.data?.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center p-6">
                  <NoContent message="No contests found !" />
                </td>
              </tr>
            ) : (
              contests?.data?.map((contest: TPhotographyContest, index: number) => (
                <tr key={contest._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
                  <td className="p-7 text-blue-gray-700 font-bold">
                    <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
                  </td>
                  <td className="p-4 text-blue-gray-400 font-medium">
                    <FaRegClock className="inline mr-2 text-lg text-secondary" />
                    {contest?.createdAt && moment(contest?.createdAt).format("MMMM D, YYYY")}
                  </td>
                  <td className="p-4 text-blue-gray-500 font-poppins font-medium">
                    <BiBook className="inline mr-2 text-lg text-secondary" /> {contest.title}
                  </td>
                  <td className="p-4">
                    <div>
                      <FaTag className="inline mr-2 text-lg text-SecondPrimary" />
                      <span className="text-blue-gray-500 font-poppins font-semibold">{contest?.prize}</span>
                    </div>
                  </td>
                  <td className="p-4 text-blue-gray-400 font-medium">
                    <FaRegClock className="inline mr-2 text-lg text-secondary" />
                    {contest?.deadline && moment(contest?.deadline).format("MMMM D, YYYY")}
                  </td>
                  <td className="p-4 text-blue-gray-500 font-poppins font-semibold">
                    {contest?.status === "granted" ? (
                      <FaCheckCircle className="inline mr-2 text-green" />
                    ) : (
                      <FaTimesCircle className="inline mr-2 text-red" />
                    )}
                    <span className={`${contest?.status === "granted" ? "text-green" : "text-red"}`}>
                      {contest?.status}
                    </span>
                  </td>
                  <td className="p-4 relative text-center">
                    <div className="relative">
                      <button onClick={() => toggleDropdown(index)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <BsThreeDots className="text-xl" />
                      </button>
                      {openDropdown === index && (
                        <div className={`absolute ${index === contests?.data?.length - 1 ? "-bottom-6" : "-top-3"} right-14 bg-white shadow-md rounded-lg text-sm w-36`}>
                          <ul>
                            {role === "user" && (
                              <li
                                className="flex items-center hover:bg-gray-100 cursor-pointer text-primary font-semibold py-2 px-2"
                                onClick={() => navigate(`/dashboard/${user?.role}/contestDetails/${contest?._id}`)}
                              >
                                <FaUsers className="mr-2 text-blue-500" /> Participate
                              </li>
                            )}
                            {(role === "contestHolder" || role === "admin") && (
                              <>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700" onClick={() => openUpdateModal(contest)}>
                                  <FaEdit className="mr-2 text-blue-500" /> Update
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700" onClick={() => deleteByContest(contest?._id)}>
                                  <FaTrash className="mr-2 text-red" /> Delete
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700" onClick={() => navigate(`/dashboard/${user?.role}/contestDetails/${contest?._id}`)}>
                                  <FaEye className="mr-2 text-green" /> Details
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700" onClick={() => navigate(`/dashboard/${user?.role}/contestParticipation/${contest?._id}`)}>
                                  <FaUsers className="mr-2 text-blue-gray-700" /> Participant
                                </li>
                              </>
                            )}
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
      <Modal
        isOpen={isModalOpen}
        title="Update Contest"
        onClose={closeModal}
        className="max-w-2xl"
      >
        <ContestUpdate
          contest={selectedContest}
          closeModal={closeModal}
        />
      </Modal>

      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </div>
  );
};

export default ContestHolderContest;
