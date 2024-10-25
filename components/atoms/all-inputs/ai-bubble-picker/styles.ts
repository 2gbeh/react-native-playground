import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiBubblePickerStyles = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  bubble: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  label: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
