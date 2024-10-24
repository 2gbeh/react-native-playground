import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const appointmentsMenuBarStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  right_content: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
  totaled_button: {
    backgroundColor: COLOR.border,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  totaled_label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  totaled_value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
