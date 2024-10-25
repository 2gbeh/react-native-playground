import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiBubblesStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  bubble: {
    backgroundColor: COLOR.surface,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
