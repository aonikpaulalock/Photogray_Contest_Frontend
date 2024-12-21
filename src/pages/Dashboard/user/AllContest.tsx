// import { useState } from "react";
// import moment from "moment";
// import { FaRegClock, FaCheckCircle, FaTimesCircle, FaTag, FaUsers } from "react-icons/fa";
// import { BsThreeDots } from "react-icons/bs";
// import { TPhotographyContest } from "../../../types";
// import { BiBook } from "react-icons/bi";
// import { RiNumbersFill } from "react-icons/ri";
// import Pagination from "../../../components/pagination/Pagination";
// import { useGetAllContestsQuery } from "../../../redux/feature/contestHolder/contestHolderApi";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../../redux/hooks";
// import { currentUser } from "../../../redux/auth/authSlice";

// const AllContest = () => {
//   const navigate = useNavigate();
//   const user = useAppSelector(currentUser);
//   const [page, setPage] = useState(1);
//   const { data: contests } = useGetAllContestsQuery(
//     {
//       page: page,
//       limit: 4,
//     },
//     {
//       refetchOnMountOrArgChange: true
//     }
//   );
//   console.log(contests)
//   const metaData = contests?.meta;

//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   const toggleDropdown = (index: number) => {
//     if (openDropdown === index) {
//       setOpenDropdown(null);
//     } else {
//       setOpenDropdown(index);
//     }
//   };

//   return (
//     <div className="p-6">
//       <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
//         <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
//           <tr>
//             <th className="p-5 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
//             <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Create Date</th>
//             <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Contest Name</th>
//             <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Price</th>
//             <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Deadline</th>
//             <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Status</th>
//             <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {contests?.data?.map((contest: TPhotographyContest, index: number) => (
//             <tr key={contest._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
//               {/* Serial */}
//               <td className="p-7 text-blue-gray-700 font-bold">
//                 <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
//               </td>

//               {/* Date */}
//               <td className="p-4 text-blue-gray-400 font-medium">
//                 <FaRegClock className="inline mr-2 text-lg text-secondary" />
//                 {contest?.createdAt && moment(contest?.createdAt).format("MMMM D, YYYY")}
//               </td>

//               {/* Contest Name */}
//               <td className="p-4 text-blue-gray-500 font-poppins font-medium ">
//                 <BiBook className="inline mr-2 text-lg text-secondary" /> {contest.title}
//               </td>

//               {/* Email */}
//               <td className="p-4">
//                 <div>
//                   <FaTag className="inline mr-2 text-lg text-SecondPrimary " />
//                   <span className="text-blue-gray-500 font-poppins font-semibold">{contest?.prize}</span>
//                 </div>
//               </td>

//               <td className="p-4 text-blue-gray-400 font-medium">
//                 <FaRegClock className="inline mr-2 text-lg text-secondary" />
//                 {contest?.deadline && moment(contest?.deadline).format("MMMM D, YYYY")}
//               </td>

//               {/* Like */}
//               <td className="p-4 text-blue-gray-500 font-poppins font-semibold">
//                 {contest?.status === "granted" ? (
//                   <FaCheckCircle className="inline mr-2 text-green" />
//                 ) : (
//                   <FaTimesCircle className="inline mr-2 text-red" />
//                 )}
//                 <span
//                   className={`${contest?.status === "granted" ? "text-green" : "text-red"
//                     }`}
//                 >
//                   {contest?.status}
//                 </span>
//               </td>


//               {/* Actions */}
//               <td className="p-4 relative text-center">
//                 <div className="relative">
//                   <button onClick={() => toggleDropdown(index)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
//                     <BsThreeDots className="text-xl" />
//                   </button>
//                       {openDropdown === index && (
//                         <div className={`absolute ${index === contests?.data?.length - 1 ? "-bottom-2" : "-top-2"} right-10 bg-white shadow-md rounded-lg w-36`}
//                         >
//                           <ul>
//                             <li className="flex items-center hover:bg-gray-100 cursor-pointer text-primary font-semibold py-2 px-2"
//                               onClick={() => navigate(`/dashboard/${user?.role}/contestDetails/${contest?._id}`)}>
//                               <FaUsers className="mr-2 text-blue-500" /> Participate
//                             </li>
//                           </ul>
//                         </div>
//                       )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <Pagination
//         current={page}
//         onChange={(value) => setPage(value)}
//         pageSize={metaData?.limit}
//         total={metaData?.total}
//       />
//     </div>
//   );
// };

// export default AllContest;


import { useState } from "react";
import Pagination from "../../../components/pagination/Pagination";
import { useGetAllContestsQuery } from "../../../redux/feature/contestHolder/contestHolderApi";
import ContestTable from "../../../components/Contest/ContestTable";
import { useNavigate } from "react-router-dom";

const ContestHolderContest = ({ role }: { role: string }) => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const { data: contests } = useGetAllContestsQuery(
    {
      page: page,
      limit: 4,
    },
    {
      refetchOnMountOrArgChange: true
    }
  );
  console.log(contests)
  const metaData = contests?.meta;

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const navigateToContestDetails = (contestId: string) => {
    navigate(`/dashboard/${role}/contestDetails/${contestId}`);
  };

  return (
    <div className="p-6">
      {/* <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
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
          {contests?.data?.map((contest: TPhotographyContest, index: number) => (
            <tr key={contest._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">

              <td className="p-7 text-blue-gray-700 font-bold">
                <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
              </td>

         
              <td className="p-4 text-blue-gray-400 font-medium">
                <FaRegClock className="inline mr-2 text-lg text-secondary" />
                {contest?.createdAt && moment(contest?.createdAt).format("MMMM D, YYYY")}
              </td>

           
              <td className="p-4 text-blue-gray-500 font-poppins font-medium ">
                <BiBook className="inline mr-2 text-lg text-secondary" /> {contest.title}
              </td>

              
              <td className="p-4">
                <div>
                  <FaTag className="inline mr-2 text-lg text-SecondPrimary " />
                  <span className="text-blue-gray-500 font-poppins font-semibold">{contest?.prize}</span>
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
                <span
                  className={`${contest?.status === "granted" ? "text-green" : "text-red"
                    }`}
                >
                  {contest?.status}
                </span>
              </td>


       
              <td className="p-4 relative text-center">
                <div className="relative">
                  <button onClick={() => toggleDropdown(index)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <BsThreeDots className="text-xl" />
                  </button>
                      {openDropdown === index && (
                        <div className={`absolute ${index === contests?.data?.length - 1 ? "-bottom-2" : "-top-2"} right-10 bg-white shadow-md rounded-lg w-36`}
                        >
                          <ul>
                            <li className="flex items-center hover:bg-gray-100 cursor-pointer text-primary font-semibold py-2 px-2"
                              onClick={() => navigate(`/dashboard/${user?.role}/contestDetails/${contest?._id}`)}>
                              <FaUsers className="mr-2 text-blue-500" /> Participate
                            </li>
                          </ul>
                        </div>
                      )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <ContestTable
        contests={contests}
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        role={role}
        navigateToContestDetails={navigateToContestDetails}
      />
      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </div>
  );
};

export default ContestHolderContest;


