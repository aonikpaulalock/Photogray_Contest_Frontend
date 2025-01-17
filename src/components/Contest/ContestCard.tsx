import { TPhotographyContest } from "../../types";
import image from "../../assets/landingPage/user.png"
import moment from "moment";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ContestCard = ({ contest }: {
  contest: TPhotographyContest
}) => {
  const navigate = useNavigate()
  const user = useAppSelector(currentUser);
  return (

    <div className="sm:p-8 p-6 bg-[#EAEAEA]">
      <div className="flex items-center justify-between mb-10">
        <span className=" bg-[#FFC397] text-white px-[14px] py-[5px] text-sm font-medium">{contest?.status}</span>
        <span className="text-2xl font-medium text-primary font-poppins">$ {contest?.prize}</span>
      </div>

      {/* <!-- Contest Details --> */}
      <p className="text-primary text-base leading-7 font-medium">{contest?.requirements}</p>

      <div className="mt-10 mb-14 flex justify-between">
        {/* Tags Section */}
        <div className="flex-1 mr-4">
          <p className="text-xs text-[#b2b6be] font-extralight mb-[6px]">Tag</p>
          <div className="flex flex-wrap gap-2">
            {contest?.tags?.map((tag, index) => (
              <span
                className="text-xs bg-[#d3d1d1] px-3 py-1 font-medium text-[#a3a3a3]"
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
          <span className="text-xs bg-[#d3d1d1] px-3 py-1 font-medium text-[#a3a3a3]">
            {contest?.deadline &&
              moment(contest?.deadline).format("MMMM D, YYYY")}
          </span>
        </div>
      </div>

      {/* <!-- User Info --> */}
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div className="flex items-center gap-4">
          <img src={contest?.userId?.profileImage || image} className="w-12 h-12 object-cover rounded-full ring-2 ring-SecondPrimary" alt="User Image" />
          <div>
            <p className="text-base font-medium text-primary">{contest?.userId?.username}</p>
            <p className="text-xs font-extralight text-primary ">{contest?.userId?.country}</p>
          </div>
        </div>
        <p className="text-xs font-extralight text-primary">{contest?.userId?.role}</p>
      </div>

      {/* <!-- Button --> */}
      <div className="text-center mt-10 mb-6">
        <button
          onClick={() => navigate(`/dashboard/${user?.role}/contestDetails/${contest?._id}`)}
          className="btn-outline">Browse Contest</button>
      </div>
    </div>
  )
};

export default ContestCard;