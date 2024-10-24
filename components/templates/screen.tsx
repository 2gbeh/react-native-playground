import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";

export default function Screen() {
  console.log("🚀 ~ Screen");
  // renders
  return (
    <View style={s.container}>
      <Text>Screen</Text>
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {},
});
