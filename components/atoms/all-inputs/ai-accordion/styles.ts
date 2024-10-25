import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiAccordionStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      rowGap: 19,
    },
  }),
  header: (collapsed?: boolean) =>
    StyleSheet.create({
      transform: {
        borderBottomColor: COLOR.surface,
        borderBottomWidth: collapsed ? 1 : 0,
        paddingBottom: collapsed ? 16 : 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    }),
};
