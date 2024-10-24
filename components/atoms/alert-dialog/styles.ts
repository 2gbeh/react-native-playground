import { StyleSheet, Platform } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const alertDialogStyles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    width: 320,
    rowGap: 16,
  },
  heading: {
    color: COLOR.primary_dark,
    textAlign: "center",
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
  success_card: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.success,
    borderTopWidth: 8,
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
