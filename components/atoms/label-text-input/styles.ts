import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const labelTextInputStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
    flex: 1,
  },
  label_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  label: {
    color: COLOR.text_faded,
    paddingHorizontal: 2,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
  asterisk: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    right: 8,
    top: 6,
  },
  input: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  placeholder: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
