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
    
    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

  })
})

export const {
  useGetMeUserQuery,
  useUpdateUserMutation
} = userApi