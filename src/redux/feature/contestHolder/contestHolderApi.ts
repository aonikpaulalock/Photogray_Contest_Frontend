import { baseApi } from "../../api/baseApi"
import { tagTypes } from "../../tagType"


const contestHolderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //! Register User
    getAllContests: builder.query({
      query: ({ page, limit }) => {
        const params: Record<string, string> = {};
        if (page) params['page'] = page.toString();
        if (limit) params['limit'] = limit.toString();

        return {
          url: "/contests",
          method: "GET",
          params,
        };
      },
      providesTags: [tagTypes.contest],
    }),

    getSingleContest: builder.query({
      query: (contestId: string) => {
        return {
          url: `/contests/${contestId}`,
          method: "GET",
        }
      },
      providesTags: [tagTypes.contest],
    }),

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

    updateContest: builder.mutation({
      query: ({ contestId, data }) => ({
        url: `/contests/${contestId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: [tagTypes.contest],
    }),

    deleteContest: builder.mutation({
      query: (contestId: string) => ({
        url: `/contests/${contestId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.contest],
    }),

  })
})

export const {
  useCreateContestMutation,
  useUpdateContestMutation,
  useDeleteContestMutation,
  useGetAllContestsQuery,
  useGetSingleContestQuery
} = contestHolderApi