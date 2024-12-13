import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store.config";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({}),
});
