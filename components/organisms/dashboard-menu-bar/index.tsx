import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
//
import SearchBar from "@/components/atoms/search-bar";
import CreateAppointmentWidget from "@/components/molecules/create-appointment-widget";
import CTAButton from "@/components/atoms/cta-button";
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
      <View style={s.right_content}>
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
