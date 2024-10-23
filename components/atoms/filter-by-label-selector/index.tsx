import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronDownIcon } from "@/constants/ICON";

interface IProps {}

const FilterByLabelSelector: React.FC<IProps> = () => {
  console.log("🚀 ~ FilterByLabelSelector");
  // renders
  return (
    <Pressable style={s.container}>
      <Text style={s.label}>All appointment types</Text>
      <ChevronDownIcon color={COLOR.primary_dark} />
    </Pressable>
  );
};

export default React.memo(FilterByLabelSelector);

const s = StyleSheet.create({
  _: {},
  container: {
    paddingVertical: 12,
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
