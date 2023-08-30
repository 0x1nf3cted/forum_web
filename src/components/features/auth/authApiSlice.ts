import { apiSlice } from "../../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: "/auth/local/signin",
        method: "POST",
        body: {
          email: credentials.email,
          hashedPassword: credentials.password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
