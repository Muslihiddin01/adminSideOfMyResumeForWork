import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://store-api.softclub.tj/" }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (body) => ({
        url: "Account/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginAdminMutation } = userApi;
