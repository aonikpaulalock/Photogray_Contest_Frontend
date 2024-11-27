import { baseApi } from "../../api/baseApi"
import { tagTypes } from "../../tagType"

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    getMeUser: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        }
      },
      providesTags: [tagTypes.user],
    }),
  })
})

export const {
  useGetMeUserQuery,
} = userApi