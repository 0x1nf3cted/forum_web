import { apiSlice } from "../../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => (credentials: any) => ({
        url: "/users/me",
        method: "GET",
      }),
      keepUnusedDataFor: 5
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
