import ProtectedRoute from "../layout/ProtectedRoute";
import AdminDashboard from "../pages/Dashboard/admin/AdminDashboard";
import AdminSubmission from "../pages/Dashboard/admin/AdminSubmission";
import AllParticipant from "../pages/Dashboard/admin/AllParticipant";
import ManageContest from "../pages/Dashboard/admin/ManageContest";
import ManageUser from "../pages/Dashboard/admin/ManageUser";
import UserDetails from "../pages/Dashboard/admin/UserDetails";
import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import ContestHolderCreateContest from "../pages/Dashboard/contestHolder/ContestHolderCreateContest";
import AllBlog from "../pages/Dashboard/user/AllBlog";
import BlogDetails from "../pages/Dashboard/user/BlogDetails";
import SubmissionDetails from "../pages/Dashboard/user/SubmissionDetails";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const adminRoutes = {
  path: "admin",
  element: <ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>,
  children: [
    {
      path: "create-contest",
      element: <ProtectedRoute role="admin">
        <ContestHolderCreateContest role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "all-contest",
      element: <ProtectedRoute role="admin">
        <ContestHolderContest role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "manage-contest",
      element: <ProtectedRoute role="admin">
        <ManageContest />
      </ProtectedRoute>,
    },
    {
      path: "submission",
      element: <ProtectedRoute role="admin">
        <AdminSubmission />
      </ProtectedRoute>,
    },
    {
      path: "submissionDetails/:submissionId",
      element: <ProtectedRoute role="admin">
        <SubmissionDetails />
      </ProtectedRoute>,
    },
    {
      path: "manage-user",
      element: <ProtectedRoute role="admin">
        <ManageUser />
      </ProtectedRoute>,
    },
    {
      path: "userDetails/:userId",
      element: <ProtectedRoute role="admin">
        <UserDetails role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "contestDetails/:id",
      element: <ProtectedRoute role="admin">
        <ContestDetails role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "contestParticipation/:contestId",
      element: <ProtectedRoute role="admin">
        <AllParticipant role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "profile",
      element: <ProtectedRoute role="admin">
        <UserProfile role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "change-password",
      element: <ProtectedRoute role="admin">
        <UserChangePassword role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "all-blog",
      element: <ProtectedRoute role="admin">
        <AllBlog role="admin" />
      </ProtectedRoute>,
    },
    {
      path: "blogDetails/:blogId",
      element: <ProtectedRoute role="admin">
        <BlogDetails />
      </ProtectedRoute>,
    },
  ],
};