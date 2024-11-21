import { StyleSheet, View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={s.container}>
      <Text style={s.h1}>HomeScreen</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF0F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  h1: {
    color: "#051438",
  },
});
