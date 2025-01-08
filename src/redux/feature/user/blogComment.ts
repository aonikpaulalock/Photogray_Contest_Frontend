import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagType";


const blogCommentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComment: builder.query({
      query: (blogId: string) => ({
        url: `/blog-comment/${blogId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blogComment],
    }),

    totalComments: builder.query({
      query: (blogId: string) => {
        return {
          url: `/blog-comment/total-comment/${blogId}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blogComment],
    }),
    createComment: builder.mutation({
      query: (commentData) => ({
        url: "/blog-comment",
        method: "POST",
        body: commentData,
      }),
      invalidatesTags: [tagTypes.blogComment],
    }),
  }),
});

export const {
  useGetAllCommentQuery,
  useCreateCommentMutation,
  useTotalCommentsQuery,
} = blogCommentApi;