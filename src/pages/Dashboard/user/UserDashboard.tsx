import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  )
};

export default UserDashboard;