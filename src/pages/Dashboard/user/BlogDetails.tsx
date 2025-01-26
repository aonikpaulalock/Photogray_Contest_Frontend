import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../../redux/feature/user/blogApi";
import BlogComment from "../../../components/Blogs/BlogComment";

const BlogDetails = () => {
  const { blogId } = useParams()
  const { data: blogs } = useGetSingleBlogQuery(blogId as string)
  return (
    <div>
      <div className="flex items-center justify-center relative">

        <div className="relative bg-white md:flex overflow-hidden w-full max-w-5xl z-10 shadow-lg rounded-lg">

          <div className=" w-full md:w-7/12 h-fit relative flex justify-center items-center">
            <img
              src={blogs?.data?.blogPhoto}
              alt="Forgot Password Illustration"
              className=""
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center sm:px-8 px-3">
            {/* User Info */}
            <div className="flex justify-between items-center space-x-4 my-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-14 h-14 object-cover rounded-full"
                  src={blogs?.data?.userId?.profileImage} alt="User Image"
                />
                <div>
                  <p className="text-base font-medium text-primary">{blogs?.data?.userId?.username}</p>
                  <p className="text-xs font-extralight text-primary">{blogs?.data?.userId?.country}</p>
                </div>
              </div>
              <p className="text-xs font-extralight text-primary sm:block hidden">{blogs?.data?.userId?.role}</p>
            </div>
            <div className="">
              <div className="flex items-center justify-between mb-10">
                <span className="bg-[#FFC397] text-white px-[14px] py-[5px] text-sm font-medium">
                  {blogs?.data?.title}
                </span>
              </div>

              {/* Contest Details */}
              <p className="text-primary text-base leading-7 font-medium">
                {blogs?.data?.content}
              </p>
            </div>
            <div>
              <BlogComment blog={blogs?.data} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default BlogDetails;