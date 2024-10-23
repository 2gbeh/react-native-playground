import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { ChevronDownIcon, BusyIcon } from "@/features/phc-tab/constants/ICON";

interface IProps {}

const FilterBySelector: React.FC<IProps> = () => {
  console.log("🚀 ~ FilterBySelector");
  // renders
  return (
    <Pressable style={s.container}>
      <Text style={s.label}>Today</Text>
      <ChevronDownIcon color={COLOR.text_muted} />
    </Pressable>
  );
};

export default React.memo(FilterBySelector);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
