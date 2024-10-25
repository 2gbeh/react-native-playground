import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const accentButtonStyles = StyleSheet.create({
  _: {},
  button: {
    backgroundColor: COLOR.text_muted,
    borderColor: COLOR.text_muted,
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
  },
  button_text: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
