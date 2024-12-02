import { baseApi } from "../../api/baseApi"
import { tagTypes } from "../../tagType"

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Retrive User
    blogCreate: builder.mutation({
      query: (data) => {
        return {
          url: "/blog",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.blog],
    }),

    getUserBlog: builder.query({
      query: (blogId: string) => ({
        url: `/blog/userBlog/${blogId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    //! Retrive all blogs
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: "/blog",
          method: "GET",
        }
      },
      providesTags: [tagTypes.blog],
    }),
  })
})

export const {
  useBlogCreateMutation,
  useGetUserBlogQuery,
  useGetAllBlogsQuery
} = blogApi