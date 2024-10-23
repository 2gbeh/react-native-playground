import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import Header from "@/components/organisms/header";
import BackButton from "@/components/atoms/back-button";
import { FONT, COLOR } from "@/constants/THEME";

export default function CreateAppointmentScreen() {
  console.log("🚀 ~ CreateAppointmentScreen");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <Header />
      <View style={s.content}>
        <BackButton>Add patient</BackButton>
        <ScrollView>
          
        </ScrollView>
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
  content: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    flex: 1,
    rowGap: 24,
  },
  patient_list_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  patient_list_heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  statistics_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
