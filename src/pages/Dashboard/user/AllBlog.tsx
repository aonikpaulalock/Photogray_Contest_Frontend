import { useState } from "react";
import moment from "moment";
import { FaEye, FaRegClock } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useAppSelector } from "../../../redux/hooks";
import { currentUser } from "../../../redux/auth/authSlice";
import { useGetAllBlogsQuery } from "../../../redux/feature/user/blogApi";
import { Blog } from "../../../types";
import { useNavigate } from "react-router-dom";
import { BiBook, BiEnvelope } from "react-icons/bi";
import { RiNumbersFill } from "react-icons/ri";
import Pagination from "../../../components/pagination/Pagination";
import Loading from "../../../components/Loading/Loading";
import NoContent from "../../../components/Loading/NoContent";

const AllBlog = ({ role }: { role: string }) => {
  console.log(role)
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const user = useAppSelector(currentUser);
  const { data: blogs, isLoading } = useGetAllBlogsQuery({
    page: page,
    limit: 4,
  });
  const metaData = blogs?.meta;
  // const { data: totalLikes } = useTotalLikesQuery(blogs?._id);
  // console.log(totalLikes)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="p-6">
      <table className="w-full border-collapse rounded-lg shadow-lg overflow-hidden bg-white">
        <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50 transition duration-200 border-b-[3px] border-b-blue-gray-100">
          <tr>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Serial</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Created user</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Email</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Blog Created Date</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Blog Name</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins">Image</th>
            <th className="p-4 text-md text-SecondPrimary font-semibold font-poppins text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={7} className="text-center py-4">
                <Loading />
              </td>
            </tr>
          ) : blogs?.data?.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-4">
                <NoContent message="No blogs found !" />
              </td>
            </tr>
          ) : (
            blogs?.data?.map((blog: Blog, index: number) => {
              return (
                <tr key={blog._id} className="hover:bg-gray-50 transition duration-200 text-sm border-b-[3px] border-b-blue-gray-100">
                  {/* Serial */}
                  <td className="p-4 text-blue-gray-700 font-bold">
                    <RiNumbersFill className="inline mr-2 text-lg text-secondary" /> {index + 1}
                  </td>

                  {/* UserName */}
                  <td className="p-4">
                    <div>
                      <BiEnvelope className="inline mr-2 text-lg text-secondary " />
                      <span className="text-blue-gray-500 font-poppins font-semibold">{blog?.userId?.username}</span>
                    </div>
                  </td>
                  {/* Email */}
                  <td className="p-2">
                    <div>
                      <BiEnvelope className="inline mr-2 text-lg text-secondary " />
                      <span className="text-blue-gray-500 font-poppins font-semibold">{blog?.userId?.email}</span>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-4 text-blue-gray-400 font-medium">
                    <FaRegClock className="inline mr-2 text-lg text-secondary" />
                    {blog?.createdAt && moment(blog?.createdAt).format("MMMM D, YYYY, h:mm A")}
                  </td>

                  {/* Blog Name */}
                  <td className="p-4 text-blue-gray-500 font-poppins font-medium ">
                    <BiBook className="inline mr-2 text-lg text-secondary" /> {blog.title}
                  </td>

                  {/* Image */}
                  <td className="p-4 text-gray-500">
                    <img className="w-12 h-12 object-cover rounded-full" src={blog.blogPhoto} alt="" />
                  </td>

                  {/* Actions */}
                  <td className="p-4 relative text-center">
                    <div className="relative">
                      <button onClick={() => toggleDropdown(index)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <BsThreeDots className="text-xl" />
                      </button>
                      {openDropdown === index && (
                        <div className={`absolute ${index === blogs?.data?.length - 1 ? "-bottom-2" : "top-0"} right-12 bg-white shadow-md rounded-lg z-50 text-sm w-32`}>
                          <ul>
                            <li
                              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                              onClick={() => navigate(`/dashboard/${user?.role}/blogDetails/${blog._id}`)}
                            >
                              <FaEye className="mr-2 text-green" /> Details
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <Pagination
        current={page}
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit} // Items per page
        total={metaData?.total}
      />
    </div>
  );
};

export default AllBlog;
