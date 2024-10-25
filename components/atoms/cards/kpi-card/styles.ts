import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const kpiCardStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
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
