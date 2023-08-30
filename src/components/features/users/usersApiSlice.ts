import { apiSlice } from "../../../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users/me",
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
