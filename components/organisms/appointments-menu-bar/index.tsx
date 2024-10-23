import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import CTAButton from "../../atoms/cta-button";
import SearchBar from "../../atoms/search-bar";
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronLeftIcon } from "@/constants/ICON";

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
        <CTAButton>Create appointment</CTAButton>
        <CTAButton variant="outline">Add patient</CTAButton>

        {/* SEARCH */}
        <SearchBar placeholder="Find patient" />
      </View>
    </View>
  );
};

export default React.memo(AppointmentsMenuBar);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
  right_content: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
  totaled_button: {
    backgroundColor: COLOR.border,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  totaled_label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  totaled_value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
