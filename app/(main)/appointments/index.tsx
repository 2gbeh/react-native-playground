import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
//
import Header from "@/components/organisms/header";
import AppointmentsMenuBar from "@/components/organisms/appointments-menu-bar";
import PatientListCard from "@/components/molecules/patient-list-card";
import { FONT, COLOR } from "@/constants/THEME";
//
import getAllAppointments from "@/api/getAllAppointments";
import AppointmentsFilterBar from "@/components/organisms/appointments-filter-bar";

export default function AppointmentsDashboardScreen() {
  console.log("🚀 ~ AppointmentsDashboardScreen");
  // renders
  return (
    <View style={s.container}>
      <AppointmentsMenuBar />
      <AppointmentsFilterBar />
      <FlatList
        data={getAllAppointments}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PatientListCard data={item} isBusy={item.clinic.id == 1} />
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
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
