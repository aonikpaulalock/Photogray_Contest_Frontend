import { baseApi } from "../../api/baseApi"

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    getMeUser: builder.query({
      query: () => {
        return {
          url: "/users/me",
          method: "GET",
        }
      }
    }),
  })
})

export const {
  useGetMeUserQuery,
} = userApi