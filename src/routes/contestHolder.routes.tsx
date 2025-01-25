import ProtectedRoute from "../layout/ProtectedRoute";
import AllParticipant from "../pages/Dashboard/admin/AllParticipant";
import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import ContestHolderCreateContest from "../pages/Dashboard/contestHolder/ContestHolderCreateContest";
import ContestHolderDashboard from "../pages/Dashboard/contestHolder/ContestHolderDashboard";
import ContestHolderSubmission from "../pages/Dashboard/contestHolder/ContestHolderSubmission";
import AllBlog from "../pages/Dashboard/user/AllBlog";
import BlogDetails from "../pages/Dashboard/user/BlogDetails";
import SubmissionDetails from "../pages/Dashboard/user/SubmissionDetails";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const contestHolderRoutes = {
  path: "contestHolder",
  element: <ProtectedRoute role="contestHolder">
    <ContestHolderDashboard />
  </ProtectedRoute>,
  children: [
    {
      path: "create-contest",
      element: <ProtectedRoute role="contestHolder">
        <ContestHolderCreateContest role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "all-contest-contestHolder",
      element: <ProtectedRoute role="contestHolder">
        <ContestHolderContest role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "contestDetails/:id",
      element: <ProtectedRoute role="contestHolder">
        <ContestDetails role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "contestParticipation/:contestId",
      element: <ProtectedRoute role="contestHolder">
        <AllParticipant role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "submission",
      element: <ProtectedRoute role="contestHolder">
        <ContestHolderSubmission />
      </ProtectedRoute>,
    },
    {
      path: "submissionDetails/:submissionId",
      element: <ProtectedRoute role="contestHolder">
        <SubmissionDetails />
      </ProtectedRoute>,
    },
    {
      path: "profile",
      element: <ProtectedRoute role="contestHolder">
        <UserProfile role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "change-password",
      element: <ProtectedRoute role="contestHolder">
        <UserChangePassword role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "all-blog",
      element: <ProtectedRoute role="contestHolder">
        <AllBlog role="contestHolder" />
      </ProtectedRoute>,
    },
    {
      path: "blogDetails/:blogId",
      element: <ProtectedRoute role="contestHolder">
        <BlogDetails />
      </ProtectedRoute>,
    },
  ],
};