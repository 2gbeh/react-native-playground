import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const labelPatientIdInputStyles = StyleSheet.create({
  _: {},
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
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
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: 220,
  },
  placeholder: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
