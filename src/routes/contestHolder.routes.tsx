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
  element: <ContestHolderDashboard />,
  children: [
    {
      path: "create-contest",
      element: <ContestHolderCreateContest role="contestHolder" />,
    },
    {
      path: "all-contest-contestHolder",
      element: <ContestHolderContest role="contestHolder" />,
    },
    {
      path: "contestDetails/:id",
      element: <ContestDetails role="contestHolder" />,
    },
    {
      path: "contestParticipation/:contestId",
      element: <AllParticipant role="contestHolder" />,
    },
    {
      path: "submission",
      element: <ContestHolderSubmission />,
    },
    {
      path: "submissionDetails/:submissionId",
      element: <SubmissionDetails/>,
    },
    {
      path: "profile",
      element: <UserProfile role="contestHolder" />,
    },
    {
      path: "change-password",
      element: <UserChangePassword role="contestHolder" />,
    },
    {
      path: "all-blog",
      element: <AllBlog role="contestHolder" />,
    },
    {
      path: "blogDetails/:blogId",
      element: <BlogDetails />,
    },
  ],
};