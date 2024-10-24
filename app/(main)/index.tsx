import { FlatList, View, Text, Pressable } from "react-native";
//
import DashboardMenuBar from "@/components/organisms/dashboard-menu-bar";
import Hyperlink from "@/components/atoms/hyperlink";
import PatientListCard from "@/components/molecules/patient-list-card";
import FilterByButtonSelector from "@/components/atoms/filter-by-button-selector";
import AdminMetrics from "@/components/organisms/admin-metrics";
import LabelTabs from "@/components/atoms/label-tabs";
import NoContentCard from "@/components/atoms/no-content-card";
//
import { dashboardScreenStyles as s } from "@/features/dashboard/styles";
import getAllAppointments from "@/api/getAllAppointments";

export default function DashboardScreen() {
  console.log("🚀 ~ DashboardScreen");
  // renders
  return (
    <>
      {/* ACTIONS */}
      <DashboardMenuBar />

      {/* LIST */}
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
    </>
  );
}
