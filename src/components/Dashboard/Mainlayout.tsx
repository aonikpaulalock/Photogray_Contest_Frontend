import { Outlet } from "react-router-dom";
import DahboardHeader from "./DahboardHeader";
import Sidebar from "./Sidebar";

const Mainlayout = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 bg-lightBlue">
        <DahboardHeader />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
};

export default Mainlayout;