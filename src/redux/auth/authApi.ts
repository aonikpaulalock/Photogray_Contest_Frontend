import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tagType";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.user],
    }),

    //! Login User
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.user],
    }),

    //! user password-change
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.user],
    }),

    //! user forget-password
    forgetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.user],
    }),

    //! user reset-password
    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.user],
    }),
  })
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation
} = authApi