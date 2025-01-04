import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import AdminSubmission from "../pages/Dashboard/admin/AdminSubmission";
import AllParticipant from "../pages/Dashboard/admin/AllParticipant";
import ManageContest from "../pages/Dashboard/admin/ManageContest";
import ManageUser from "../pages/Dashboard/admin/ManageUser";
import UserDetails from "../pages/Dashboard/admin/UserDetails";
import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import ContestHolderCreateContest from "../pages/Dashboard/contestHolder/ContestHolderCreateContest";
import SubmissionDetails from "../pages/Dashboard/user/SubmissionDetails";
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
      element: <AdminSubmission />,
    },
    {
      path: "submissionDetails/:submissionId",
      element: <SubmissionDetails role="admin" />,
    },
    {
      path: "manage-user",
      element: <ManageUser />,
    },
    {
      path: "userDetails/:userId",
      element: <UserDetails role="admin" />,
    },
    {
      path: "contestDetails/:id",
      element: <ContestDetails role="admin" />,
    },
    {
      path: "contestParticipation/:contestId",
      element: <AllParticipant role="admin" />,
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