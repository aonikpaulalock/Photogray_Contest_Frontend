/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { useState } from "react";
import { RiNumbersFill } from "react-icons/ri";
import { FaEdit, FaEye, FaRegClock, FaTag, FaTrash, FaTrophy, FaUser } from "react-icons/fa";
import moment from "moment";
import { BiBook } from "react-icons/bi";
import Pagination from "../../../components/pagination/Pagination";
import Modal from "../../../components/Modal/Modal";
import SubmissionUpdate from "./SubmissionUpdate";
import deleteEntity from "../../../utils/deleteEntity";
import { TSubmission } from "../../../types";
import { useGetUserSubmissionQuery, useDeleteSubmissionMutation } from "../../../redux/feature/user/submissionApi";
import Loading from "../../../components/Loading/Loading";
import NoContent from "../../../components/Loading/NoContent";

const MySubmission = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const [page, setPage] = useState(1);

  const { data: submissions, refetch, isLoading } = useGetUserSubmissionQuery({
    page: page,
    limit: 4,
  });

  const metaData = submissions?.meta;
  const [submissionDelete] = useDeleteSubmissionMutation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);

  const deleteSubmission = async (submissionId: string) => {
    await deleteEntity(
      submissionId,
      submissionDelete,
      "Your submission has been deleted.",
      "Something went wrong!"
    );

    if (submissions?.data?.length === 1 && page > 1) {
      setPage(page - 1);
    } else {
      refetch();
    }

    setOpenDropdown(null);
  };

  const openUpdateModal = (submission: TSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  return (
    <div className="sm:p-6 p-1">
      <div className="overflow-x-auto xs:min-w-full w-[280px]">
        <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
            <tr>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Submission Contest Name</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Submission Deadline</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Price</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Submission Task</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Winner</th>
              <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  <Loading />
                </td>
              </tr>
            ) : submissions?.data?.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  <NoContent
                    message="No submission found !" />
                </td>
              </tr>
            ) : (
              submissions?.data?.map((submission: TSubmission, index: number) => (
                <tr key={submission._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
                  {/* Serial */}
                  <td className="p-3 text-blue-gray-700 font-bold">
                    <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
                  </td>

                  {/* Contest Name */}
                  <td className="p-2 text-blue-gray-500 font-poppins font-medium">
                    <BiBook className="inline mr-2 text-lg text-secondary" /> {submission?.contestId?.title}
                  </td>

                  {/* Deadline */}
                  <td className="p-2 text-blue-gray-400 font-medium">
                    <FaRegClock className="inline mr-2 text-lg text-secondary" />
                    {submission?.contestId?.deadline && moment(submission?.contestId?.deadline).format("MMMM D, YYYY")}
                  </td>

                  {/* Prize */}
                  <td className="p-2">
                    <div>
                      <FaTag className="inline mr-2 text-lg text-SecondPrimary" />
                      <span className="text-blue-gray-500 font-poppins font-semibold">{submission?.contestId?.prize}</span>
                    </div>
                  </td>

                  {/* Images */}
                  <td className="p-2">
                    <div className="flex space-x-2">
                      {submission?.images?.map((image: string, idx: number) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`Submission ${index + 1} Image ${idx + 1}`}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-2 text-blue-gray-500 font-poppins font-semibold">
                    <span className="flex items-center gap-2">
                      {submission?.isWinner ? (
                        <>
                          <FaTrophy className="text-yellow-500" /> {/* Winner Icon */}
                          <span className="text-yellow-500 font-semibold">Winner</span>
                        </>
                      ) : (
                        <>
                          <FaUser className="text-green" /> {/* Participant Icon */}
                          <span className="text-green font-semibold">Participate</span>
                        </>
                      )}
                    </span>
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
                          className={`absolute ${index === submissions?.data?.length - 1 ? "-bottom-2" : "-top-2"
                            } right-16 bg-white shadow-md rounded-lg w-30 p-1`}
                        >
                          <ul>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                              onClick={() => openUpdateModal(submission)}>
                              <FaEdit className="mr-2 text-blue-500" /> Update
                            </li>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                              onClick={() => deleteSubmission(submission?._id)}>
                              <FaTrash className="mr-2 text-red" /> Delete
                            </li>
                            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                              onClick={() => navigate(`/dashboard/${user?.role}/submissionDetails/${submission._id}`)}>
                              <FaEye className="mr-2 text-green" /> Details
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

      <Modal
        isOpen={isModalOpen}
        title="Update Submission"
        onClose={closeModal}
        className="max-w-sm sm:max-w-lg"
      >
        <SubmissionUpdate
          submission={selectedSubmission}
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

export default MySubmission;
