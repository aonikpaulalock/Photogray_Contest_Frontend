import { baseApi } from "../../api/baseApi"


const contestHolderApi = baseApi.injectEndpoints({
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
} = contestHolderApi