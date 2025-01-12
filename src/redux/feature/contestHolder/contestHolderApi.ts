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

    manageAdminContests: builder.query({
      query: ({ page, limit, searchTerm, tags }) => {
        console.log("params", { page, limit, searchTerm, tags })
        const params: Record<string, string> = {};
        console.log("updatedParams", params)
        if (page) params['page'] = page.toString();
        if (limit) params['limit'] = limit.toString();
        if (searchTerm) params['searchTerm'] = searchTerm;
        if (tags && tags !== "All") {
          console.log(params['tags'])
          console.log(tags)
          params['tags'] = tags;
        }
        return {
          url: "/contests/manage-contest",
          method: "GET",
          params,
        };
      },
      providesTags: [tagTypes.contest],
    }),

    getContestsParticipation: builder.query({
      query: ({ contestId, page, limit }) => {
        return {
          url: `/contests/${contestId}/participants`,
          method: "GET",
          params: { page, limit },
        };
      },
      providesTags: [tagTypes.contest],
    }),

  })
})

export const {
  useCreateContestMutation,
  useUpdateContestMutation,
  useDeleteContestMutation,
  useGetAllContestsQuery,
  useManageAdminContestsQuery,
  useGetSingleContestQuery,
  useGetContestsParticipationQuery,
} = contestHolderApi