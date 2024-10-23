import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { FONT,COLOR } from "@/constants/THEME";

interface IProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const KpiCard: React.FC<IProps> = ({ label, value, icon }) => {
  console.log("🚀 ~ KpiCard");
  // renders
  return (
    <View style={s.container}>
      <View style={s.top}>
        <Text style={s.label}>{label}</Text>
        <View style={s.icon}>{icon}</View>
      </View>
      <Text style={s.value}>{value}</Text>
    </View>
  );
};

export default React.memo(KpiCard);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 24,
    fontWeight: "700",
  },
  icon: {
    backgroundColor: COLOR.icon_radius,
    borderRadius: 48,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
