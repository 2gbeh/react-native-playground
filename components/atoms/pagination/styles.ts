import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const paginationStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24,
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  of: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  button: {
    backgroundColor: COLOR.pager_disabled,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 4,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  prev: {
    backgroundColor: COLOR.pager_disabled,
  },
  next: {
    backgroundColor: COLOR.white,
  },
});
