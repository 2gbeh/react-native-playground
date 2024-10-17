import { Platform, StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const formSheetStyles = {
  _: {},
  static: StyleSheet.create({
    container: {
      rowGap: 24,
    },
    input_wrapper: {
      // flex: 1,
      flexDirection: "row",
    },
    input: {
      flex: 1,
      // backgroundColor: COLOR.input,
      color: COLOR.text,
      borderColor: COLOR.text_muted,
      borderBottomWidth: 1,
      paddingHorizontal: 16,
      // borderRadius: 4,
      height: 40,
      fontFamily: FONT.RobotoRegular,
      fontSize: 14,
    },
    footer: {
      marginTop: 16,
      flexDirection: "row",
      columnGap: 24,
    },
  }),
  dropdown: StyleSheet.create({
    container: {
      backgroundColor: COLOR.surface,
      borderColor: COLOR.surface,
      borderRadius: 16,
    },
    item: {
      color: COLOR.text_muted,
      fontSize: 14,
    },
    placeholder: {
      color: COLOR.text_muted,
      fontSize: 14,
    },
    selected: {
      color: COLOR.text,
    },
  }),
  button: (primary = true) =>
    StyleSheet.create({
      transform: {
        backgroundColor: primary ? COLOR.primary : COLOR.none,
        borderColor: COLOR.primary,
        borderWidth: 2,
        borderRadius: 24,
        height: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
    }),
  buttonText: (primary = true) =>
    StyleSheet.create({
      transform: {
        color: primary ? COLOR.background : COLOR.primary,
        fontFamily: FONT.RobotoMedium,
      },
    }),
};
