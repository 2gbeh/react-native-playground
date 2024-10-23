import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import CTAButton from "../../atoms/cta-button";
import SearchBar from "../../atoms/search-bar";
import { FONT, COLOR } from "@/constants/THEME";

const DashboardMenuBar = () => {
  console.log("🚀 ~ DashboardMenuBar");
  // renders
  return (
    <View style={s.container}>
      {/* HEADING */}
      <Text style={s.heading}>Hospital statistics</Text>
      <View style={s.right_content}>
        {/* BUTTON */}
        <CTAButton>Create appointment</CTAButton>
        <CTAButton variant="outline">Add patient</CTAButton>

        {/* SEARCH */}
        <SearchBar placeholder="Find patient" />
      </View>
    </View>
  );
};

export default React.memo(DashboardMenuBar);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});
