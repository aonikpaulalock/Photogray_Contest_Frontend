import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import CreateContest from "../pages/Dashboard/admin/CreateContest";
import ManageContest from "../pages/Dashboard/admin/ManageContest";
import ManageUser from "../pages/Dashboard/admin/ManageUser";
import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import AllContest from "../pages/Dashboard/user/AllContest";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const adminRoutes = {
  path: "admin",
  element: <AdminDashboard />,
  children: [
    {
      path: "create-contest",
      element: <CreateContest />,
    },
    {
      path: "all-contest",
      element: <AllContest />,
    },
    {
      path: "manage-contest",
      element: <ManageContest />,
    },
    {
      path: "manage-user",
      element: <ManageUser />,
    },
    {
      path: "contestDetails/:id",
      element: <ContestDetails role="admin" />,
    },
    {
      path: "profile",
      element: <UserProfile role="admin" />,
    },
    {
      path: "change-password",
      element: <UserChangePassword role="admin" />,
    },
  ],
};