/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../auth/authSlice";
import { toast } from "sonner";
import { tagTypesList } from "../tagType";
interface ErrorData {
  message?: string;
}

const mainBaseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  // "http://localhost:5000/api/auth/refresh-token" === Refrsh token local server,
  baseUrl: "https://photography-backend-psi.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    } else {
      console.log("No token found");
    }
  }
})

const customBaseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
  let result = await mainBaseQuery(args, api, extraOptions);

  if ((result?.error?.data as ErrorData)?.message && result?.error?.status === 404) {
    toast.error((result.error.data as ErrorData).message);
  }

  if ((result?.error?.data as ErrorData)?.message && result?.error?.status === 403) {
    toast.error((result.error.data as ErrorData).message);
  }

  // Token refresh logic
  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://photography-backend-psi.vercel.app/api/auth/refresh-token", {
      method: "POST",
      credentials: "include"
    })
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(setUser({
        user,
        token: data.data.accessToken
      }));

      result = await mainBaseQuery(args, api, extraOptions);
    }
    else {
      api.dispatch(logout())
    }
  }

  return result;
}

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: tagTypesList,
})