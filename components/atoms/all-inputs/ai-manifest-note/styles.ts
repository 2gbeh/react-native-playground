import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiManifestNoteStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.neutral_50,
    borderColor: COLOR.surface,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    rowGap: 19,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  grid_item: {
    rowGap: 8,
  },
  label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "500",
  },
  value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "500",
  },
});
