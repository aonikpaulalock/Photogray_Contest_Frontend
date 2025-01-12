/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetSingleSubmissionQuery } from "../../../redux/feature/user/submissionApi";
import Loading from "../../../components/Loading/Loading";

const SubmissionDetails = () => {
  const { submissionId } = useParams()
  const { data: submissionData, isLoading } = useGetSingleSubmissionQuery(submissionId as string)

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-lg rounded-lg p-9 w-5/6 bg-white">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-md font-semibold">Contest Name :
            <span className="text-2xl font-bold text-SecondPrimary ml-1">
              {submissionData?.data?.contestId?.title}
            </span>
          </h1>
          <p className="text-sm font-medium">
            Deadline :
            <span className="text-md font-bold text-SecondPrimary ml-1">
              {submissionData?.data?.contestId?.deadline}
            </span>
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {submissionData?.data?.images?.map((image: any, index: any) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group"
            >
              <img
                src={image}
                alt={`Artwork ${index + 1}`}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-white px-4 py-1 text-sm rounded shadow">
                <p className="text-gray-600">{submissionData?.data?.contestId?.paymentStatus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prize and Payment Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-2">
            <h2 className="text-xs font-semibold text-primary">Prize</h2>
            <p className="text-lg font-bold text-SecondPrimary">
              $ {submissionData?.data?.contestId?.prize} BDT
            </p>
          </div>
          <div className="p-2">
            <h2 className="text-xs font-semibold text-primary">Payment Status</h2>
            <p
              className={`text-lg font-bold ${submissionData?.data?.contestId?.paymentStatus === "PAID" ? "text-green" : "text-red"
                }`}
            >
              {submissionData?.data?.contestId?.paymentStatus}
            </p>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="flex items-center gap-4">
          <img
            src={submissionData?.data?.userId?.profileImage}
            alt={submissionData?.data?.userId?.username}
            className="w-16 h-16 rounded-full ring-2 ring-SecondPrimary"
          />
          <div>
            <h3 className="text-lg font-semibold text-primary">
              {submissionData?.data?.userId?.username}
            </h3>
            <p className="text-SecondPrimary">Contestant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;
