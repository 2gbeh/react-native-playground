import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const labelTabsStyles = {
  static: StyleSheet.create({
    _: {},
    container: {
      borderBottomColor: COLOR.neutral_100,
      borderBottomWidth: 2,
      paddingBottom: 8,
      flexDirection: "row",
      alignItems: "center",
      columnGap: 24,
      position: "relative",
    },
    button: {
      alignItems: "center",
      rowGap: 8,
    },
  }),
  label: (active = false) =>
    StyleSheet.create({
      transform: {
        color: active ? COLOR.primary : COLOR.tab_text,
        fontFamily: FONT.GilroyMedium,
        fontSize: 16,
        fontWeight: "600",
      },
    }),
  indicator: (active = false) =>
    StyleSheet.create({
      transform: {
        borderColor: active ? COLOR.primary : COLOR.none,
        borderWidth: 2,
        borderRadius: 10,
        width: 40,
        position: "absolute",
        bottom: -11,
      },
    }),
};
