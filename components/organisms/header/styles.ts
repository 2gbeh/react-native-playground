import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const headerStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    borderBottomColor: COLOR.neutral_100,
    borderBottomWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 24,
  },
  greeting: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 18,
    fontWeight: "700",
  },
  textSize: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyLight,
    fontSize: 18,
    fontWeight: "700",
  },
});
