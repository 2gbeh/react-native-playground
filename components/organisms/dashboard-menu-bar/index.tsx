import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
//
import SearchBar from "@/components/atoms/form-controls/search-bar";
import CTAButton from "@/components/atoms/buttons/cta-button";
import CreateAppointmentWidget from "@/components/organisms/create-appointment-widget";
//
import { dashboardMenuBarStyles as s } from "./styles";

const DashboardMenuBar = () => {
  console.log("🚀 ~ DashboardMenuBar");
  // renders
  return (
    <View style={s.container}>
      {/* HEADING */}
      <Text style={s.heading}>Hospital statistics</Text>

      {/* BUTTONS */}
      <View style={s.right}>
        <CreateAppointmentWidget />
        <CTAButton
          action={() => router.push("/patient/create")}
          variant="outline"
        >
          Add patient
        </CTAButton>

        {/* SEARCH */}
        <SearchBar placeholder="Find patient" />
      </View>
    </View>
  );
};

export default React.memo(DashboardMenuBar);
