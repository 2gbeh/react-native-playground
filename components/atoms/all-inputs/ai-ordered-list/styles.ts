import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiOrderedListStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 12,
  },
  list: {
    rowGap: 12,
  },
  list_item: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  label: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    color: COLOR.text_200,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
