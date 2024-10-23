import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
//
import { FONT,COLOR } from "@/constants/THEME";
import { ChevronDownIcon, FlaskIcon } from "@/constants/ICON";

interface IProps {}

const InvestigationsSelectorSheet = () => {
  console.log("🚀 ~ InvestigationsSelectorSheet");
  // renders
  return (
    <Pressable style={s.container}>
      <FlaskIcon color={COLOR.primary_dark} />
      <Text style={s.label}>Investigations</Text>
      <ChevronDownIcon color={COLOR.primary_dark} />
    </Pressable>
  );
};

export default React.memo(InvestigationsSelectorSheet);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.neutral_50,
    borderColor: COLOR.neutral_50,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
