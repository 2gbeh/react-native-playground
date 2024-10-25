import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const labelGovtIdInputStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
    flex: 1,
  },
  label: {
    color: COLOR.text_faded,
    paddingHorizontal: 2,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  input_type: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 27,
  },
  input_value: {
    borderLeftColor: COLOR.border,
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  placeholder: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
