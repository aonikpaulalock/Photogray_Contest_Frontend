import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import AllBlog from "../pages/Dashboard/user/AllBlog";
import BlogDetails from "../pages/Dashboard/user/BlogDetails";
import CreateBlog from "../pages/Dashboard/user/CreateBlog";
import MyBlog from "../pages/Dashboard/user/MyBlog";
import MySubmission from "../pages/Dashboard/user/MySubmission";
import SubmissionDetails from "../pages/Dashboard/user/SubmissionDetails";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserDashboard from "../pages/Dashboard/user/UserDashboard";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const userRoutes = {
  path: "user",
  element: <UserDashboard />,
  children: [
    {
      path: "all-contests",
      element: <ContestHolderContest role="user" />,
    },
    {
      path: "create-blog",
      element: <CreateBlog />,
    },
    {
      path: "all-blog",
      element: <AllBlog role="user" />,
    },
    {
      path: "my-blog",
      element: <MyBlog />,
    },
    {
      path: "contestDetails/:id",
      element: <ContestDetails role="user" />,
    },
    {
      path: "blogDetails/:blogId",
      element: <BlogDetails />,
    },
    {
      path: "submission",
      element: <MySubmission />,
    },
    {
      path: "submissionDetails/:submissionId",
      element: <SubmissionDetails role="user" />,
    },
    {
      path: "profile",
      element: <UserProfile role="user" />,
    },
    {
      path: "change-password",
      element: <UserChangePassword role="user" />,
    },
  ],
};