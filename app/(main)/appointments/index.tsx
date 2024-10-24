import { FlatList, View, Text, Pressable } from "react-native";
//
import AppointmentsMenuBar from "@/components/organisms/appointments-menu-bar";
import PatientListCard from "@/components/molecules/patient-list-card";
import AppointmentsFilterBar from "@/components/organisms/appointments-filter-bar";
//
import { appointmentsScreenStyles as s } from "@/features/appointment/appointments/styles";
import getAllAppointments from "@/api/getAllAppointments";

export default function AppointmentsScreen() {
  console.log("🚀 ~ AppointmentsScreen");
  // renders
  return (
    <>
      {/* ACTIONS */}
      <AppointmentsMenuBar />

      {/* FILTERS */}
      <AppointmentsFilterBar />

      {/* LIST */}
      <FlatList
        data={getAllAppointments}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PatientListCard data={item} isBusy={item.clinic.id == 1} />
        )}
      />
    </>
  );
}
