import moment from "moment";
import {
  FaRegClock,
  FaCheckCircle,
  FaTimesCircle,
  FaTag,
  FaUsers,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiNumbersFill } from "react-icons/ri";
import { TPhotographyContest } from "../../types";
import ContestDropdown from "./ContestDropdown";

interface ContestTableProps {
  contests: TPhotographyContest[];
  openDropdown: number | null;
  toggleDropdown: (index: number) => void;
  role: string;
  navigateToContestDetails: (contestId: string) => void;
  handleUpdateContest?: (contestId: string) => void;
  handleDeleteContest?: (contestId: string) => void;
}

const ContestTable = ({
  contests,
  openDropdown,
  toggleDropdown,
  role,
  navigateToContestDetails,
  handleUpdateContest,
  handleDeleteContest,
}: ContestTableProps) => {
  const getDropdownActions = (contest: TPhotographyContest) => {
    if (role === "user") {
      return [
        {
          label: "Participate",
          icon: <FaUsers className="mr-2 text-blue-500" />,
          action: () => navigateToContestDetails(contest._id),
        },
      ];
    }

    if ((role === "admin" || role === "contestHolder") && handleUpdateContest && handleDeleteContest) {
      return [
        {
          label: "Edit",
          icon: <FaEdit className="mr-2 text-blue-500" />,
          action: () => handleUpdateContest(contest._id),
        },
        {
          label: "Delete",
          icon: <FaTrash className="mr-2 text-red-500" />,
          action: () => handleDeleteContest(contest._id),
        },
        {
          label: "Details",
          icon: <FaUsers className="mr-2 text-blue-500" />,
          action: () => navigateToContestDetails(contest._id),
        },
      ];
    }

    return [];
  };

  return (
    <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
      <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
        <tr>
          <th className="p-5 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
          <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Create Date</th>
          <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Contest Name</th>
          <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Price</th>
          <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Deadline</th>
          <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Status</th>
          <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {contests.map((contest, index) => (
          <tr
            key={contest._id}
            className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100"
          >
            <td className="p-7 text-blue-gray-700 font-bold">
              <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
            </td>
            <td className="p-4 text-blue-gray-400 font-medium">
              <FaRegClock className="inline mr-2 text-lg text-secondary" />
              {contest?.createdAt && moment(contest?.createdAt).format("MMMM D, YYYY")}
            </td>
            <td className="p-4 text-blue-gray-500 font-poppins font-medium">
              <BiBook className="inline mr-2 text-lg text-secondary" /> {contest.title}
            </td>
            <td className="p-4">
              <div>
                <FaTag className="inline mr-2 text-lg text-SecondPrimary" />
                <span className="text-blue-gray-500 font-poppins font-semibold">
                  {contest?.prize}
                </span>
              </div>
            </td>
            <td className="p-4 text-blue-gray-400 font-medium">
              <FaRegClock className="inline mr-2 text-lg text-secondary" />
              {contest?.deadline && moment(contest?.deadline).format("MMMM D, YYYY")}
            </td>
            <td className="p-4 text-blue-gray-500 font-poppins font-semibold">
              {contest?.status === "granted" ? (
                <FaCheckCircle className="inline mr-2 text-green" />
              ) : (
                <FaTimesCircle className="inline mr-2 text-red" />
              )}
              <span className={`${contest?.status === "granted" ? "text-green" : "text-red"}`}>
                {contest?.status}
              </span>
            </td>
            <td className="p-4 relative text-center">
              <ContestDropdown
                actions={getDropdownActions(contest)}
                openDropdown={openDropdown === index}
                toggleDropdown={() => toggleDropdown(index)}
                position={index === contests.length - 1 ? "-bottom-2" : "-top-2"}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContestTable;
