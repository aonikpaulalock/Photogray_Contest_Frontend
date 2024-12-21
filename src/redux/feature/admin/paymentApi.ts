import { baseApi } from "../../api/baseApi"


const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    paymentInit: builder.mutation({
      query: ({ contestId, userId }) => {
        return {
          url: `/payment/init/${contestId}/${userId}`,
          method: "POST",
        }
      }
    }),
  })
})

export const {
  usePaymentInitMutation,
} = paymentApi