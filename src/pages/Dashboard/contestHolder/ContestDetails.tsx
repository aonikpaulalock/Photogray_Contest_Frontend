import detailsImage from "../../../assets/landingPage/dashboard/details.png";
import { useState } from "react";
import { TPhotographyContest } from "../../../types";
import Modal from "../../../components/Modal/Modal";
import ContestSubmission from "./ContestSubmission";
import { useParams } from "react-router-dom";
import { useGetSingleContestQuery } from "../../../redux/feature/contestHolder/contestHolderApi";
import moment from "moment";

const ContestDetails = ({ role }: { role: string }) => {
  const { id } = useParams();
  const { data: contest } = useGetSingleContestQuery(id as string);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContest, setSelectedContest] = useState<TPhotographyContest | null>(null);

  const openUpdateModal = () => {
    if (contest) {
      setSelectedContest(contest);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center relative">
        {/* Main container */}
        <div className="relative bg-white flex overflow-hidden w-full max-w-5xl h-[500px] z-10 p-5 shadow-lg rounded-lg">
          {/* Left Section */}
          <div className="w-1/2 flex flex-col justify-center p-6">
            <div className="">
              <div className="flex items-center justify-between mb-10">
                <span className="bg-[#FFC397] text-white px-[14px] py-[5px] text-sm font-medium">
                  {contest?.data?.status}
                </span>
                <span className="text-2xl font-medium text-primary font-poppins">${contest?.data?.prize}</span>
              </div>

              {/* Contest Details */}
              <p className="text-primary text-base leading-7 font-medium">
                {contest?.data?.requirements}
              </p>

              {/* Tags */}
              <div className="mt-10 mb-14 flex justify-between">
                {/* Tags Section */}
                <div className="flex-1 mr-4">
                  <p className="text-xs text-[#b2b6be] font-extralight mb-[6px]">Tag</p>
                  <div className="flex flex-wrap gap-2">
                    {contest?.data?.tags?.map((tag: string[], index: number) => (
                      <span
                        className="text-xs bg-[#d3d1d1] px-3 py-2 font-medium text-[#a3a3a3]"
                        key={index}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deadline Section */}
                <div className="flex-none">
                  <p className="text-xs text-[#b2b6be] font-extralight mb-[6px]">Deadline</p>
                  <span className="text-xs bg-[#d3d1d1] px-3 py-2 font-medium text-[#a3a3a3]">
                    {contest?.data?.deadline &&
                      moment(contest?.data?.deadline).format("MMMM D, YYYY")}
                  </span>
                </div>
              </div>

              {/* User Info */}
              <div className="flex justify-between items-center space-x-4 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-14 h-14 object-cover rounded-full"
                    src={contest?.data?.userId?.profileImage} alt="User Image"
                  />
                  <div>
                    <p className="text-base font-medium text-primary">{contest?.data?.userId?.username}</p>
                    <p className="text-xs font-extralight text-primary">{contest?.data?.userId?.country}</p>
                  </div>
                </div>
                <p className="text-xs font-extralight text-primary">{contest?.data?.userId?.role}</p>
              </div>

              {/* Button */}
              {role === "user" && (
                <div className="mt-10 mb-6">
                  <button className="btn-outline" onClick={openUpdateModal}>
                    Participate Contest
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-7/12 relative flex justify-center items-center">
            <img
              src={detailsImage}
              alt="Forgot Password Illustration"
              className="p-2"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        title="Participate Contest"
        onClose={closeModal}
        className="max-w-4xl"
      >
        {selectedContest ? (
          <ContestSubmission
            contest={selectedContest}
            closeModal={closeModal}
          />
        ) : (
          <p>Loading...</p>
        )}
      </Modal>
    </div>
  );
};

export default ContestDetails;
