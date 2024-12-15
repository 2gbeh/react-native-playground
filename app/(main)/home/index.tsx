import { StyleSheet, View, Text, Image, FlatList } from "react-native";
//
import AppBar from "@/components/app-bar";
import Hero from "@/components/hero";
import ListItem from "@/components/lists/list-item";
import { TransactionHelper } from "@/store/transactions/transaction.helper";
import mockTransactionsData from "@/store/transactions/data/getTransactions.json";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // RENDER
  return (
    <View style={sx.container}>
      <AppBar />
      <Hero data={mockTransactionsData} />
      <FlatList
        data={mockTransactionsData}
        keyExtractor={(item) => TransactionHelper.constructUID(item)}
        renderItem={({ item }) => <ListItem data={item} />}
      />
    </View>
  );
}

const sx = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    rowGap: 16,
  },
});
