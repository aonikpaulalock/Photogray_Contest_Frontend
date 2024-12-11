import AllParticipation from "../pages/Dashboard/contestHolder/AllParticipation";
import AllSubmission from "../pages/Dashboard/contestHolder/AllSubmission";
import ContestDetails from "../pages/Dashboard/contestHolder/ContestDetails";
import ContestHolderContest from "../pages/Dashboard/contestHolder/ContestHolderContest";
import ContestHolderCreateContest from "../pages/Dashboard/contestHolder/ContestHolderCreateContest";
import ContestHolderDashboard from "../pages/Dashboard/contestHolder/ContestHolderDashboard";
import UserChangePassword from "../pages/Dashboard/user/UserChangePassword";
import UserProfile from "../pages/Dashboard/user/UserProfile";

export const contestHolderRoutes = {
  path: "contestHolder",
  element: <ContestHolderDashboard />,
  children: [
    {
      path: "create-contest-contestHolder",
      element: <ContestHolderCreateContest />,
    },
    {
      path: "all-contest-contestHolder",
      element: <ContestHolderContest />,
    },
    {
      path: "contestDetails/:id",
      element: <ContestDetails role="contestHolder" />,
    },
    {
      path: "all-participation",
      element: <AllParticipation />,
    },
    {
      path: "all-submission",
      element: <AllSubmission />,
    },
    {
      path: "profile",
      element: <UserProfile role="contestHolder" />,
    },
    {
      path: "change-password",
      element: <UserChangePassword role="contestHolder" />,
    },
  ],
};