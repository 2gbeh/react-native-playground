import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import CTAButton from "../../atoms/cta-button";
import SearchBar from "../../atoms/search-bar";
import CreateAppointmentWidget from "@/components/molecules/create-appointment-widget";
import { ChevronLeftIcon } from "@/constants/ICON";
//
import { appointmentsMenuBarStyles as s } from "./styles";

const AppointmentsMenuBar = () => {
  console.log("🚀 ~ AppointmentsMenuBar");
  // renders
  return (
    <View style={s.container}>
      {/* HEADING */}
      <View style={s.nav}>
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon />
        </Pressable>
        <Text style={s.heading}>Patient list</Text>
      </View>
      <View style={s.right_content}>
        {/* TOTALED */}
        <View style={s.totaled_button}>
          <Text style={s.totaled_label}>My patient count</Text>
          <Text style={s.totaled_value}>10</Text>
        </View>

        {/* BUTTON */}
        <CreateAppointmentWidget />
        <CTAButton variant="outline">Add patient</CTAButton>

        {/* SEARCH */}
        <SearchBar placeholder="Find patient" />
      </View>
    </View>
  );
};

export default React.memo(AppointmentsMenuBar);
