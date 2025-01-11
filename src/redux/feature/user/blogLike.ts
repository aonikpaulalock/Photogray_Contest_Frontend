import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagType";


const blogLikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLike: builder.mutation({
      query: (likeData) => {
        console.log(likeData)
        return {
          url: "/blog-like/create-like",
          method: "POST",
          body: likeData
        }
      },
      invalidatesTags: [tagTypes.blogLike],
    }),

    removeLike: builder.mutation({
      query: (likeData) => {
        console.log(likeData)
        return {
          url: `/blog-like/dislike/${likeData.blogId}/${likeData.userId}`,
          method: "DELETE",
        }
      },
      invalidatesTags: [tagTypes.blogLike],
    }),

    totalLikes: builder.query({
      query: (blogId) => {
        console.log(blogId)
        return {
          url: `/blog-like/total-like/${blogId}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blogLike],
    }),

    checkBlogLike: builder.query({
      query: (userId: string) => {
        console.log(userId)
        return {
          url: `/blog-like/check-like/${userId}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blogLike],
    }),
  }),
});

export const {
  useCreateLikeMutation,
  useRemoveLikeMutation,
  useTotalLikesQuery,
  useCheckBlogLikeQuery,
} = blogLikeApi;