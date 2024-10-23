import { FlatList, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
//
import Header from "@/features/phc-tab/components/organisms/header";
import Nav from "@/features/phc-tab/components/organisms/nav";
import Hyperlink from "@/features/phc-tab/components/atoms/hyperlink";
import PatientListCard from "@/features/phc-tab/components/molecules/patient-list-card";
import FilterBySelector from "@/features/phc-tab/components/atoms/filter-by-selector";
import AdminMetrics from "@/features/phc-tab/components/organisms/admin-metrics";
import LabelTabs from "@/features/phc-tab/components/atoms/label-tabs";
import NoContentCard from "@/features/phc-tab/components/atoms/no-content-card";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { GridIcon } from "@/features/phc-tab/constants/ICON";
//
import { dashboardLayoutStyles as s } from "@/features/phc-tab/components/templates/dashboard-layout/styles";
import getAllAppointments from "@/features/phc-tab/data/getAllAppointments";

export default function DashboardScreen() {
  console.log("🚀 ~ DashboardScreen");
  // renders
  return (
    <SafeAreaView style={s.container}>
      <Header />
      <View style={s.content}>
        <Nav />
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
              <Hyperlink href="/" chevron="right">
                View all
              </Hyperlink>
            </View>
          )}
          ListFooterComponentStyle={{ marginTop: 20 }}
          ListFooterComponent={() => (
            <View style={{ rowGap: 16 }}>
              <View style={s.statistics_header}>
                <LabelTabs tabs={["Admin metrics", "Clinical metrics"]} />
                <FilterBySelector />
              </View>
              <AdminMetrics />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
