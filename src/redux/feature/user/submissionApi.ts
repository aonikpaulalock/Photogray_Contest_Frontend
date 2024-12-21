import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../tagType";


const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubmission: builder.mutation({
      query: (data) => ({
        url: "/submission",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.submission],
    }),

    updateSubmission: builder.mutation({
      query: ({ submissionId, data }) => ({
        url: `/submission/${submissionId}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: [tagTypes.submission],
    }),

    deleteSubmission: builder.mutation({
      query: (submissionId: string) => ({
        url: `/submission/${submissionId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.submission],
    }),

    getSingleSubmission: builder.query({
      query: (submissionId: string) => {
        return {
          url: `/submission/${submissionId}`,
          method: "GET",
        }
      },
      providesTags: [tagTypes.submission],
    }),

    getUserSubmission: builder.query({
      query: ({ page, limit }: { page: number, limit: number }) => {
        const params: Record<string, string> = {};
        if (page) {
          params['page'] = page.toString();
        }
        if (limit) {
          params['limit'] = limit.toString();
        }

        return {
          url: `/submission/user-submission`,
          method: "GET",
          params,
        };
      },
      providesTags: [tagTypes.submission],
    }),

    getAdminAndContestHolderSubmission: builder.query({
      query: ({ page, limit }: { page: number, limit: number }) => {
        const params: Record<string, string> = {};
        if (page) {
          params['page'] = page.toString();
        }
        if (limit) {
          params['limit'] = limit.toString();
        }

        return {
          url: `/submission/contestHolder-submission`,
          method: "GET",
          params,
        };
      },
      providesTags: [tagTypes.submission],
    }),

  })
})

export const {
  useCreateSubmissionMutation,
  useUpdateSubmissionMutation,
  useDeleteSubmissionMutation,
  useGetSingleSubmissionQuery,
  useGetUserSubmissionQuery,
  useGetAdminAndContestHolderSubmissionQuery

} = userApi