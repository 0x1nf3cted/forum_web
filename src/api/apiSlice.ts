import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../components/features/auth/authSlice";
import { User } from "../Interfaces/Interface";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.access_token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const loginData = refreshResult?.data as {
        access_token: string;
        refresh_token: string;
      };
      const user: User = api.getState().auth.user;
      // store the new token
      api.dispatch(
        setCredentials({
          access_token: loginData.access_token,
          refresh_token: loginData.refresh_token,
          email: user.username,
        })
      );
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
