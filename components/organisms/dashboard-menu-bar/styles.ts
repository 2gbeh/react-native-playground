import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const dashboardMenuBarStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
  right_content: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
});
