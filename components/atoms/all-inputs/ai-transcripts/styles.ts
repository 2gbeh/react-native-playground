import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const aiTranscriptsStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 12,
  },
  list: {
    rowGap: 12,
  },
  list_item: {
    flexDirection: "row",
    columnGap: 10,
  },
  label: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    color: COLOR.text_200,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
  },
});
