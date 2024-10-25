import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const centerHomeFilterStyles = {
  static: StyleSheet.create({
    container: {
      backgroundColor: COLOR.neutral_25,
      borderRadius: 99,
      padding: 4,
      height: 42,
      flexDirection: "row",
      alignItems: "center",
    },
  }),
  button: (isActive = false) =>
    StyleSheet.create({
      transform: {
        backgroundColor: isActive ? COLOR.surface : COLOR.none,
        borderRadius: 23,
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    }),
  button_text: (isActive = false) =>
    StyleSheet.create({
      transform: {
        color: isActive ? COLOR.primary_dark : COLOR.text_faded,
        fontFamily: FONT.GilroyMedium,
        fontSize: 14,
        fontWeight: "500",
      },
    }),
};
