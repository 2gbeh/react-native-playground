import { createSlice } from "@reduxjs/toolkit";
import { transactionsApi } from "./transaction.api";
import { ITransactionDetail, ITransaction } from "./transaction.interface";

interface ISlice {
  isLoading: boolean;
  status?: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
  transactions: null | ITransaction;
  transaction: null | ITransactionDetail;
}

const initialState: ISlice = {
  isLoading: false,
  status: "idle",
  error: null,
  transactions: null,
  transaction: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    search: (state, action) => {
      // state.status = action.payload;
    },
    sort: (state, action) => {
      // state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        transactionsApi.endpoints.getAllTransactions.matchFulfilled,
        (state, action) => {
          // state.transactions.push(action.payload);
        }
      )
      .addMatcher(
        transactionsApi.endpoints.getTransactionByName.matchFulfilled,
        (state, action) => {
          // state.transaction = action.payload;
        }
      );
  },
});

export const { reducer: transactionReducer, actions: transactionActions } =
  transactionSlice;
