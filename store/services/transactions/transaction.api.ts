import { createEntityAdapter } from "@reduxjs/toolkit";
import { baseApi } from "../base.api";
import { ITransaction, ITransactionDetail } from "./transaction.interface";

// const transactionsAdapter = createEntityAdapter<ITransaction>({
//   selectId: (e: ITransaction) => e.results.name,
//   sortComparer: (a, b) => b.results.name.localeCompare(a.results.name),
// });

// const initialState = transactionsAdapter.getInitialState();

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllTransactions: build.query<ITransaction, void>({
      query: () => `/pokemon`,
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ name }) => ({
                type: "Transactions" as const,
                id: name,
              })),
              { type: "Transactions", id: "*" },
            ]
          : [{ type: "Transactions", id: "*" }],
    }),
    getTransactionByName: build.query<ITransactionDetail, string>({
      query: (name: string) => `/pokemon/${name}`,
      providesTags: (result, error, name) => [
        { type: "Transactions", id: name },
      ],
    }),
    addPost: build.mutation<
      ITransactionDetail,
      Partial<Omit<ITransactionDetail, "id">>
    >({
      query: (body) => ({
        url: `/pokemon`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Transactions", id: "*" }],
    }),
  }),
  overrideExisting: false,
});
