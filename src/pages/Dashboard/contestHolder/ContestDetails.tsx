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
  <div className="relative bg-white flex flex-col-reverse md:flex-row overflow-hidden w-full z-10 sm:p-5 p-3 shadow-lg rounded-lg">
    <div className="w-full md:w-1/2 flex flex-col justify-center sm:p-6 p-3">
      <div>
        <div className="flex items-center justify-between mb-10">
          <span className="bg-[#FFC397] text-white px-[14px] py-[5px] text-sm font-medium">
            {contest?.data?.status}
          </span>
          <span className="text-2xl font-medium text-primary font-poppins">${contest?.data?.prize}</span>
        </div>

        <p className="text-primary text-base leading-7 font-medium">
          {contest?.data?.requirements}
        </p>

        <div className="mt-10 mb-14 flex justify-between">

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

          <div className="flex-none">
            <p className="text-xs text-[#b2b6be] font-extralight mb-[6px]">Deadline</p>
            <span className="text-xs bg-[#d3d1d1] px-3 py-2 font-medium text-[#a3a3a3]">
              {contest?.data?.deadline &&
                moment(contest?.data?.deadline).format("MMMM D, YYYY")}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center space-x-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full"
              src={contest?.data?.userId?.profileImage}
              alt="User Image"
            />
            <div>
              <p className="text-base font-medium text-primary">{contest?.data?.userId?.username}</p>
              <p className="text-xs font-extralight text-primary">{contest?.data?.userId?.country}</p>
            </div>
          </div>
          <p className="text-xs font-extralight text-primary">{contest?.data?.userId?.role}</p>
        </div>

        {role === "user" && (
          <div className="mt-10 mb-6">
            <button className="btn-outline" onClick={openUpdateModal}>
              Participate Contest
            </button>
          </div>
        )}
      </div>
    </div>

    <div className="w-full md:w-7/12 flex justify-center items-center">
      <img
        src={detailsImage}
        alt="Forgot Password Illustration"
        className="sm:p-2"
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
