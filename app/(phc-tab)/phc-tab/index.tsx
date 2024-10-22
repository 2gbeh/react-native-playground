import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
//
import Appbar from "@/features/phc-tab/components/organisms/appbar";
import { COLOR } from "@/features/phc-tab/constants/THEME";

export default function DashboardScreen() {
  console.log("🚀 ~ DashboardScreen");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <Appbar />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {},
});
