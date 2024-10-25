import React from "react";
import { View, Text, StyleSheet } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronDownIcon } from "@/constants/ICON";

interface IProps {
  label: string;
  date: string;
  time: string;
}

const JustifiedLabelDatetime: React.FC<IProps> = ({ label, date, time }) => {
  console.log("🚀 ~ JustifiedLabelDatetime");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.values}>
        <Text style={s.value}>{date}</Text>
        <Text style={s.value}>{time}</Text>
      </View>
    </View>
  );
};

export default React.memo(JustifiedLabelDatetime);

const s = StyleSheet.create({
  _: {},
  container: {
    borderBottomColor: COLOR.border,
    borderBottomWidth: 2,
    paddingBottom: 16,
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  values: {
    flexDirection: "row",
    columnGap: 32,
  },
  value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
