import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
//
import { BackButton, CTAButton } from "@/components/atoms/buttons";
import SearchBar from "@/components/atoms/form-controls/search-bar";
import CreateAppointmentWidget from "@/components/organisms/create-appointment-widget";
//
import { appointmentsMenuBarStyles as s } from "./styles";

const AppointmentsMenuBar = () => {
  console.log("🚀 ~ AppointmentsMenuBar");
  // renders
  return (
    <View style={s.container}>
      {/* HEADING */}
      <BackButton>Patient list</BackButton>
      <View style={s.right_content}>
        {/* TOTALED */}
        <View style={s.totaled_button}>
          <Text style={s.totaled_label}>My patient count</Text>
          <Text style={s.totaled_value}>10</Text>
        </View>

        {/* BUTTON */}
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

export default React.memo(AppointmentsMenuBar);
