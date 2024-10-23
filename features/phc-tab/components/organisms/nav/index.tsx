import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import CTAButton from "../../atoms/cta-button";
import SearchBar from "../../atoms/search-bar";
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";

const Nav = () => {
  console.log("🚀 ~ Nav");
  // renders
  return (
    <View style={s.container}>
      {/* HEADING */}
      <Text style={s.heading}>Hospital statistics</Text>

      {/* FORM */}
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

export default React.memo(Nav);

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
