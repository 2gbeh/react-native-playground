import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const noContentCardStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 24,
  },
  circle: {
    backgroundColor: COLOR.primary_25,
    borderRadius: 100,
    padding: 22,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  inner_circle: {
    backgroundColor: COLOR.primary_100,
    borderRadius: 100,
    padding: 22,
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  article: {
    alignItems: "center",
    rowGap: 8,
  },
  h1: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  p: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
