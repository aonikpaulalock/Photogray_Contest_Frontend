import { baseApi } from "../../api/baseApi"
import { tagTypes } from "../../tagType"

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Retrive User
    getMeUser: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        }
      },
      providesTags: [tagTypes.user],
    }),

    getAllUser: builder.query({
      query: ({ page, limit, searchTerm, sort }) => {
        const params: Record<string, string> = {};
        if (page) {
          params['page'] = page.toString();
        }
        if (limit) {
          params['limit'] = limit.toString();
        }
        if (searchTerm) {
          params['searchTerm'] = searchTerm.toString();
        }
        if (sort) {
          params['sort'] = sort.toString();
        }
        return {
          url: "/users",
          method: "GET",
          params
        }
      },
      providesTags: [tagTypes.user],
    }),


    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    updateUserStaus: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/change-status/${userId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteUser: builder.mutation({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),

   getSingleUser: builder.query({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

  })
})

export const {
  useGetMeUserQuery,
  useUpdateUserMutation,
  useUpdateUserStausMutation,
  useDeleteUserMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery

} = userApi