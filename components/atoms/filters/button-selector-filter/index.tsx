import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronDownIcon } from "@/constants/ICON";

interface IProps {}

const ButtonSelectorFilter: React.FC<IProps> = () => {
  console.log("🚀 ~ ButtonSelectorFilter");
  // renders
  return (
    <Pressable style={s.container}>
      <Text style={s.label}>Today</Text>
      <ChevronDownIcon color={COLOR.text_muted} />
    </Pressable>
  );
};

export default React.memo(ButtonSelectorFilter);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
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
