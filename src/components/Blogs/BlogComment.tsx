/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaRegCommentDots, FaShareAlt, FaTelegram } from "react-icons/fa";
import avatar from "../../assets/landingPage/user.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/auth/authSlice";
import { useGetMeUserQuery } from "../../redux/feature/user/userApi";
import { useNavigate } from "react-router-dom";
import BlogLike from "./BlogLike";
import { useCreateCommentMutation, useGetAllCommentQuery, useTotalCommentsQuery } from "../../redux/feature/user/blogComment";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const BlogComment = ({ blog }: any) => {
  const navigate = useNavigate();
  const user = useAppSelector(currentUser);
  const { data: getMe } = useGetMeUserQuery(undefined);
  const { data: allComment } = useGetAllCommentQuery(blog?._id);
  const { data: totalComment } = useTotalCommentsQuery(blog?._id);
  const [createComment] = useCreateCommentMutation();
  const [showComment, setShowComment] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const { handleSubmit } = useForm();

  // Add emoji in comment box
  const addEmoji = (e: { native: string }) => {
    const emoji = e.native;
    setInputValue(inputValue + emoji);
  };

  // Create comment
  const onSubmit = async () => {
    if (!user) {
      Swal.fire({
        title: "Please Login first then comment in this post",
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
      const commentData = {
        userId: user?.userId,
        blogId: blog?._id,
        content: inputValue,
      };
      await createComment(commentData);
      setInputValue("");
      setShowEmoji(false);
    }
  };

  // Handle enter key press to submit
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div className="flex items-center justify-between py-5">
            <BlogLike blog={blog} />
            <div className="text-center py-2 m-2">
              <span
                onClick={() => setShowComment(!showComment)}
                className="flex items-center justify-evenly rounded-full text-gray hover:text-blue-300 hover:cursor-pointer"
              >
                <FaRegCommentDots className="text-xl me-2" />
                <span>{totalComment?.data && totalComment?.data}</span>
              </span>
            </div>
            <div className="text-center py-2 m-2">
              <span className="flex items-center justify-evenly rounded-full text-gray hover:text-blue-300 hover:cursor-pointer">
                <FaShareAlt className="text-xl me-2" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {showComment && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2 my-3 bg-blue-gray-50 w-full rounded-lg">
              <div className="flex items-start">
                <div className="mx-2 py-1">
                  <img
                    className="inline-block w-10 h-10 rounded-full object-cover"
                    src={getMe?.data?.profileImage || avatar}
                    alt=""
                  />
                </div>
                <div className="flex-1 relative">
                  <textarea
                    onFocus={() => setShowEmoji(false)}
                    rows={3}
                    cols={20}
                    className="bg-transparent text-blue-gray-700 font-medium text-lg w-full outline-none p-2 rounded-lg"
                    placeholder="Write a comment..."
                    value={inputValue}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="absolute bottom-2 right-2 flex items-center gap-2">
                    <span
                      className="hover:cursor-pointer"
                      onClick={() => setShowEmoji(!showEmoji)}
                    >
                      <BsEmojiLaughing className="text-xl" />
                    </span>
                    {inputValue.trim() === "" ? (
                      <button
                        disabled
                        className="font-bold text-2xl text-blue-gray-600 hover:cursor-not-allowed"
                      >
                        <FaTelegram />
                      </button>
                    ) : (
                      <button className="font-bold text-xl text-blue-gray-600  hover:text-blue-gray-800">
                        <FaTelegram />
                      </button>
                    )}
                  </div>
                  {showEmoji && (
                    <div className="absolute z-30 bottom-12 right-2">
                      <Picker
                        data={data}
                        emojiSize={20}
                        emojiButtonSize={28}
                        onEmojiSelect={addEmoji}
                        maxFrequentRows={0}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
          {allComment?.data?.map((comment: any) => (
            <div className="w-full" key={comment?._id}>
              <div className="bg-[#dfdfdf] inline-block p-2 mx-2 mb-3 rounded-lg pr-5 shadow">
                <div className="flex items-center">
                  <img
                    className="inline-block h-12 w-12 rounded-full object-cover"
                    src={
                      comment?.userId?.profileImage
                        ? comment?.userId?.profileImage
                        : avatar
                    }
                    alt=""
                  />
                  <div className="ml-3">
                    <h1 className="text-lg font-semibold text-SecondPrimary">
                      {comment?.userId?.username}
                    </h1>
                    <p
                      className="text-primary"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {comment?.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogComment;
