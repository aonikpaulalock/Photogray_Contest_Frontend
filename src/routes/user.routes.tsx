import ProtectedRoute from "../layout/ProtectedRoute";
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
  element: <ProtectedRoute role="user">
    <UserDashboard />
  </ProtectedRoute>,
  children: [
    {
      path: "all-contests",
      element: <ProtectedRoute role="user">
        <ContestHolderContest role="user" />
      </ProtectedRoute>,
    },
    {
      path: "create-blog",
      element: <ProtectedRoute role="user">
        <CreateBlog />
      </ProtectedRoute>,
    },
    {
      path: "all-blog",
      element: <ProtectedRoute role="user">
        <AllBlog role="user" />
      </ProtectedRoute>,
    },
    {
      path: "my-blog",
      element: <ProtectedRoute role="user">
        <MyBlog />
      </ProtectedRoute>,
    },
    {
      path: "contestDetails/:id",
      element: <ProtectedRoute role="user">
        <ContestDetails role="user" />
      </ProtectedRoute>,
    },
    {
      path: "blogDetails/:blogId",
      element: <ProtectedRoute role="user">
        <BlogDetails />
      </ProtectedRoute>,
    },
    {
      path: "submission",
      element: <ProtectedRoute role="user">
        <MySubmission />
      </ProtectedRoute>,
    },
    {
      path: "submissionDetails/:submissionId",
      element: <ProtectedRoute role="user">
        <SubmissionDetails />
      </ProtectedRoute>,
    },
    {
      path: "profile",
      element: <ProtectedRoute role="user">
        <UserProfile role="user" />
      </ProtectedRoute>,
    },
    {
      path: "change-password",
      element: <ProtectedRoute role="user">
        <UserChangePassword role="user" />
      </ProtectedRoute>,
    },
  ],
};