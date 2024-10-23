import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
//
import Header from "@/components/organisms/header";
import DashboardMenuBar from "@/components/organisms/dashboard-menu-bar";
import Hyperlink from "@/components/atoms/hyperlink";
import PatientListCard from "@/components/molecules/patient-list-card";
import FilterByButtonSelector from "@/components/atoms/filter-by-button-selector";
import AdminMetrics from "@/components/organisms/admin-metrics";
import LabelTabs from "@/components/atoms/label-tabs";
import NoContentCard from "@/components/atoms/no-content-card";
import { FONT, COLOR } from "@/constants/THEME";
//
import getAllAppointments from "@/api/getAllAppointments";

export default function DashboardScreen() {
  console.log("🚀 ~ DashboardScreen");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <Header />
      <View style={s.content}>
        <DashboardMenuBar />
        <FlatList
          data={getAllAppointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PatientListCard data={item} isBusy={item.clinic.id == 1} />
          )}
          ListHeaderComponentStyle={{ marginBottom: 16 }}
          ListHeaderComponent={() => (
            <View style={s.patient_list_header}>
              <Text style={s.patient_list_heading}>Patient list</Text>
              <Hyperlink href="/appointments" chevron="right">
                View all
              </Hyperlink>
            </View>
          )}
          ListFooterComponentStyle={{ marginTop: 20 }}
          ListFooterComponent={() => (
            <View style={{ rowGap: 16 }}>
              <View style={s.statistics_header}>
                <LabelTabs tabs={["Admin metrics", "Clinical metrics"]} />
                <FilterByButtonSelector />
              </View>
              <AdminMetrics />
            </View>
          )}
        />
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
