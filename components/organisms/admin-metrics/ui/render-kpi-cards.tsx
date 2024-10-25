import React from "react";
import { StyleSheet, View } from "react-native";
//
import KPICard from "@/components/atoms/cards/kpi-card";
import { COLOR } from "@/constants/THEME";
import {
  ClockIcon,
  HourglassIcon,
  EyeIcon,
  UserOrientationIcon,
} from "@/constants/ICON";

export function renderKPICards() {
  console.log("🚀 ~ renderKPICards");
  // renders
  return (
    <View style={s.container}>
      <View style={s.grid_item}>
        <KPICard
          label="Avg time per patient"
          value="25mins"
          icon={<ClockIcon color={COLOR.primary} />}
        />
      </View>
      <View style={s.grid_item}>
        <KPICard
          label="Avg wait time"
          value="5mins"
          icon={<HourglassIcon color={COLOR.primary} />}
        />
      </View>
      <View style={s.grid_item}>
        <KPICard
          label="Patients seen"
          value="32"
          icon={<EyeIcon color={COLOR.primary} />}
        />
      </View>
      <View style={s.grid_item}>
        <KPICard
          label="Patients waiting"
          value="64"
          icon={<UserOrientationIcon color={COLOR.primary} />}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
  },
  grid_item: {
    width: "24%",
  },
});
