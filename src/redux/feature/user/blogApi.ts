import { baseApi } from "../../api/baseApi"
import { tagTypes } from "../../tagType"

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

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

    updateBlog: builder.mutation({
      query: ({ blogId, data }) => ({
        url: `/blog/${blogId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    deleteBlog: builder.mutation({
      query: (blogId: string) => ({
        url: `/blog/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),


    getAllBlogs: builder.query({
      query: () => {
        return {
          url: "/blog",
          method: "GET",
        }
      },
      providesTags: [tagTypes.blog],
    }),

    getSingleBlog: builder.query({
      query: (blogId: string) => {
        return {
          url: `/blog/${blogId}`,
          method: "GET",
        }
      },
      providesTags: [tagTypes.blog],
    }),

    getUserBlog: builder.query({
      query: ({ blogId, page, limit }: { blogId: string, page: number, limit: number }) => {
        const params: Record<string, string> = {};
    
        if (page) {
          params['page'] = page.toString();
        }
        if (limit) {
          params['limit'] = limit.toString();
        }
    
        return {
          url: `/blog/userBlog/${blogId}`,
          method: "GET",
          params,
        };
      },
      providesTags: [tagTypes.blog],
    }),
    

  })
})

export const {
  useBlogCreateMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useGetUserBlogQuery,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
} = blogApi