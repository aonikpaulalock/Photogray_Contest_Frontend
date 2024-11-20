import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div>
      <h1>Dashboard - User</h1>
      <Outlet />
    </div>
  )
};

export default UserDashboard;