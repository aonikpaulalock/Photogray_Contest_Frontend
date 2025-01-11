/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useCheckBlogLikeQuery, useCreateLikeMutation, useRemoveLikeMutation, useTotalLikesQuery } from "../../redux/feature/user/blogLike";
import { useEffect, useState } from "react";


const BlogLike = ({ blog }: any) => {
  // console.log("blogLikeData", blog)
  const [isLiked, setIsLiked] = useState(false);
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();
  const [createLike] = useCreateLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const { data: totalLikes } = useTotalLikesQuery(blog?._id);
  // console.log("totalLike", totalLikes)
  const { data: checkPostLiked } = useCheckBlogLikeQuery(user?.userId || "");


  //  check current logged user liked witch posts
  useEffect(() => {
    const likedPosts = checkPostLiked?.data?.map((like: any) => like);
    const checkLike = likedPosts?.includes(blog?._id);
    setIsLiked(checkLike);
  }, [checkPostLiked, blog?._id]);

  // handle liked and remove liked
  const handleLikeButton = async (blogId: string) => {
    if (!user) {
      Swal.fire({
        title: "Please Login first then like",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const postLike = {
        userId: user?.userId,
        blogId: blogId,
      };
      if (!isLiked) {
        await createLike(postLike);
        setIsLiked(true);
      } else {
        await removeLike(postLike);
        setIsLiked(false);
      }
    }
  };

  return (
    <div className="text-center py-2 m-2">
      <span className="flex items-center rounded-full text-gray hover:text-red hover:cursor-pointer">
        <div
          onClick={() => handleLikeButton(blog?._id)}
          className="flex items-center"
        >
          {isLiked ? (
            <FaHeart className="text-lg me-2 text-red" />
          ) : (
            <FaRegHeart className="text-lg me-2" />
          )}
        </div>
        <span>{totalLikes?.data && totalLikes?.data}</span>
      </span>
    </div>
  );
};

export default BlogLike;