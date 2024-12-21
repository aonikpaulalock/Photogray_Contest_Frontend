/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { useState } from "react";
import { RiNumbersFill } from "react-icons/ri";
import { FaCheckCircle, FaEdit, FaExclamationCircle, FaEye, FaRegClock, FaTag, FaTrash } from "react-icons/fa";
import moment from "moment";
import Pagination from "../../../components/pagination/Pagination";
import Modal from "../../../components/Modal/Modal";
import deleteEntity from "../../../utils/deleteEntity";
import { TSubmission } from "../../../types";
import { useDeleteSubmissionMutation, useGetAdminAndContestHolderSubmissionQuery } from "../../../redux/feature/user/submissionApi";
import SubmissionUpdate from "../user/SubmissionUpdate";
import { usePaymentInitMutation } from "../../../redux/feature/admin/paymentApi";
import { toast } from "sonner";

const AdminSubmission = () => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const [page, setPage] = useState(1);

  const { data: submissions, refetch } = useGetAdminAndContestHolderSubmissionQuery({
    page: page,
    limit: 4,
  });

  const metaData = submissions?.meta;
  const [paymentInit] = usePaymentInitMutation();
  const [submissionDelete] = useDeleteSubmissionMutation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);

  const handlePayment = async (contestId: string, userId: string) => {
    const toastId = toast.loading("Please wait...");
    try {
      const response = await paymentInit({ contestId, userId }).unwrap();
      console.log(response)
      if (response?.data?.paymentUrl) {
        window.location.href = response?.data?.paymentUrl;
      } 
      else {
        toast.error("Unable to process payment. Try again.", { id: toastId })
      }
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  };

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

  // Function to open modal and set selected blog
  const openUpdateModal = (submission: TSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
          <tr>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Submission User Information</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Contest Details</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Submission Task</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Price</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Payment</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="p-2">
          {submissions?.data?.map((submission: TSubmission, index: number) => (
            <tr key={submission._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
              {/* Serial */}
              <td className="p-3 text-blue-gray-700 font-bold">
                <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
              </td>

              {/* Contest Name */}
              <td className="p-3 text-blue-gray-500 font-poppins font-medium">
                <div className="flex items-center gap-3">
                  <img
                    src={submission?.userId?.profileImage}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-secondary"
                  />
                  <div>
                    <h4 className="font-semibold text-SecondPrimary">{submission?.userId?.username}</h4>
                    <h4>{submission?.userId?.email}</h4>
                  </div>
                </div>
              </td>

              {/* Deadline */}
              <td className="p-2 text-blue-gray-400 font-medium">
                <h4 className="font-semibold text-SecondPrimary mb-1">{submission?.contestId?.title}</h4>
                <div className="flex items-center">
                  <h6 className="font-semibold text-blue-gray-900">Deadline : </h6>
                  <FaRegClock className="inline mx-1 text-lg text-secondary" />
                  {submission?.contestId?.deadline && moment(submission?.contestId?.deadline).format("MMMM D, YYYY")}
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
              {/* Prize */}
              <td className="p-2">
                <div>
                  <FaTag className="inline mr-2 text-lg text-SecondPrimary" />
                  <span className="text-blue-gray-500 font-poppins font-semibold">{submission?.contestId?.prize}</span>
                </div>
              </td>
              <td className="p-4 text-blue-gray-500 font-poppins font-semibold">
                <span className="flex items-center space-x-2">
                  {submission?.contestId?.paymentStatus === 'PAID' ? (
                    <>
                      <FaCheckCircle className="text-green" />
                      <span className="text-green font-semibold uppercase">Paid</span>
                    </>
                  ) : (
                    <>
                      <FaExclamationCircle className="text-red" />
                      <span className="text-red font-semibold uppercase">Unpaid</span>
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
                      className={`absolute ${index === submissions?.data?.length - 1 ? "-bottom-9" : "-top-2"
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
                        <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => handlePayment(submission?.contestId?._id, submission?.userId?._id)}>
                          <FaEye className="mr-2 text-green" />Payment
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

      <Modal
        isOpen={isModalOpen}
        title="Update Submission"
        onClose={closeModal}
        className="max-w-md"
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

export default AdminSubmission;
