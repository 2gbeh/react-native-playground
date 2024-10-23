import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const labelSelectorInputStyles = StyleSheet.create({
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
    justifyContent: "space-between",
  },
  placeholder: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
