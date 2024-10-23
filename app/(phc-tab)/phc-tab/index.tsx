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
import Header from "@/features/phc-tab/components/organisms/header";
import Nav from "@/features/phc-tab/components/organisms/nav";
import { COLOR } from "@/features/phc-tab/constants/THEME";

export default function DashboardScreen() {
  console.log("🚀 ~ DashboardScreen");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <Header />
      <View style={s.main}>
        <Nav />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },
  main: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
});
