import { StyleSheet, View, Text, Image } from "react-native";
//
import Tent from "@/components/atoms/tent";
import { transactionsApi } from "@/store/services/transactions/transaction.api";

export default function HomeScreen() {
  const transactions = transactionsApi.useGetAllTransactionsQuery();
  console.log("🚀 ~ HomeScreen", transactions.data);
  // renders
  return (
    <Tent>
      HomeScreen
      {transactions.isLoading
        ? "..."
        : ` (${transactions.data?.results.length ?? 0})`}
    </Tent>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {},
});
