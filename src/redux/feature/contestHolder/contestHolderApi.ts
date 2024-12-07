import { baseApi } from "../../api/baseApi"
import { tagTypes } from "../../tagType"


const contestHolderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    createContest: builder.mutation({
      query: (data) => {
        return {
          url: "/contests",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: [tagTypes.contest],
    }),
  })
})

export const {
  useCreateContestMutation,
} = contestHolderApi