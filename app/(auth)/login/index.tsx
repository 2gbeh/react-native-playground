import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";
// 
import Tent from "@/components/atoms/tent";

export default function LoginScreen() {
  console.log("🚀 ~ LoginScreen");
  // renders
  return <Tent auth>LoginScreen</Tent>;
}

const s = StyleSheet.create({
  _: {},
  container: {},
});
