import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { BedIcon } from "@/features/phc-tab/constants/ICON";

interface IProps {
  bedNumber?: number | string;
  isActive?: boolean;
}

const BedNumberBadge: React.FC<IProps> = ({ bedNumber, isActive }) => {
  const n = Number(bedNumber);
  console.log("🚀 ~ BedNumberBadge");
  // renders
  return (
    <View style={s.container}>
      <BedIcon color={isActive ? COLOR.primary : COLOR.text_200} />
      <Text style={s.text}>{bedNumber ? (n < 10 ? "0" + n : n) : "N/A"}</Text>
    </View>
  );
};

export default React.memo(BedNumberBadge);

const s = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 12,
    // height: 24,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  text: {
    color: COLOR.text_200,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
