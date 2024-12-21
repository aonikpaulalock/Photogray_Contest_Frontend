import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import AdminSubmission from "../pages/Dashboard/admin/AdminSubmission";
import ManageContest from "../pages/Dashboard/admin/ManageContest";
import ManageUser from "../pages/Dashboard/admin/ManageUser";
import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import ContestHolderCreateContest from "../pages/Dashboard/contestHolder/ContestHolderCreateContest";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const adminRoutes = {
  path: "admin",
  element: <AdminDashboard />,
  children: [
    {
      path: "create-contest",
      element: <ContestHolderCreateContest role="admin" />,
    },
    {
      path: "all-contest",
      element: <ContestHolderContest role="admin" />,
    },
    {
      path: "manage-contest",
      element: <ManageContest />,
    },
    {
      path: "submission",
      element: <AdminSubmission/>,
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