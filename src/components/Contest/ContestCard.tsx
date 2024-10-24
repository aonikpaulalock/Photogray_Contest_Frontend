import { TContest } from "../../types";
import image from "../../assets/landingPage/user.png"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ContestCard = ({ contest }: {
  contest: TContest
}) => {
  return (

    <div className="p-9 bg-[#EAEAEA]">
      <div className="flex items-center justify-between mb-10">
        <span className=" bg-[#FFC397] text-white px-[14px] py-[5px] text-sm font-medium">Granted</span>
        <span className="text-2xl font-medium text-primary font-poppins">$500</span>
      </div>

      {/* <!-- Contest Details --> */}
      <p className="text-primary text-base leading-7 font-medium">Pretium sapien, egestas tempor, placerat nibh. Egestas gravida quam vitae nulla pharetra.</p>

      {/* <!-- Tags --> */}
      <div className="mt-10 mb-14">
        <p className="text-xs text-[#b2b6be] font-extralight mb-[6px]">Tag</p>
        <span className="text-xs bg-[#d3d1d1] px-3 py-1 font-medium text-[#a3a3a3]">Product</span>
      </div>

      {/* <!-- User Info --> */}
      <div className="flex justify-between items-center space-x-4 mb-4">
        <div className="flex items-center gap-4">
          <img src={image} className="" alt="User Image" />
          <div>
            <p className="text-base font-medium text-primary">Arjun Kumar</p>
            <p className="text-xs font-extralight text-primary ">United State</p>
          </div>
        </div>
        <p className="text-xs font-extralight text-primary">Contest holder</p>
      </div>

      {/* <!-- Button --> */}
      <div className="text-center mt-10 mb-6">
        <button className="btn-outline">Browse Contest</button>
      </div>
    </div>
  )
};

export default ContestCard;