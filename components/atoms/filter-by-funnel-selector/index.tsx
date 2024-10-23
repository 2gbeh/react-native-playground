import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { SortDescIcon } from "@/constants/ICON";

interface IProps {}

const FilterByFunnelSelector: React.FC<IProps> = () => {
  console.log("🚀 ~ FilterByFunnelSelector");
  // renders
  return (
    <Pressable style={s.container}>
      <SortDescIcon color={COLOR.primary_dark} />
      <Text style={s.label}>Filter by</Text>
    </Pressable>
  );
};

export default React.memo(FilterByFunnelSelector);

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
