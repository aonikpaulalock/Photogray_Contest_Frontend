import { baseApi } from "../../api/baseApi"


const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data
        }
      }
    }),
  })
})

export const {
  useRegisterUserMutation,
} = adminApi