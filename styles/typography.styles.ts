import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const typographyStyles = StyleSheet.create({
  _: {},
  display_lg: {
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.25,
  },
  display_md: {
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  },
  display_sm: {
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  },
  headline: {},
  title: {},
  body: {},
  label: {},
});
