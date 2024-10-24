import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const appointmentsScreenStyles = StyleSheet.create({
  _: {},
  container: {},
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
