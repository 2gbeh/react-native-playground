import React from "react";
import { View, Text, StyleSheet } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronDownIcon } from "@/constants/ICON";

interface IProps {
  label: string;
  value: string;
}

const LabelledDateTimeWidget: React.FC<IProps> = ({ label, value }) => {
  console.log("🚀 ~ LabelledDateTimeWidget");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.input}>
        <Text style={s.value}>{value}</Text>
        <ChevronDownIcon color={COLOR.primary_dark} />
      </View>
    </View>
  );
};

export default React.memo(LabelledDateTimeWidget);

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
  value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
