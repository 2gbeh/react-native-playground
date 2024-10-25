import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const accordionStyles = StyleSheet.create({
  _: {},
  container: {
    marginTop: 16,
  },
  header: {
    backgroundColor: COLOR.surface,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
