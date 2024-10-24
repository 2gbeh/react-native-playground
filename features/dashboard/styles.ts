import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const dashboardScreenStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flex: 1,
    rowGap: 24,
  },
  patient_list_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  patient_list_heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  statistics_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
