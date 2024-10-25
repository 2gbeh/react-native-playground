import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiPaginationStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.neutral_25,
    borderRadius: 10,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
    borderRadius: 100,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  button_text: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 12,
    fontWeight: "600",
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  label: {
    color: COLOR.pagination_label,
    fontFamily: FONT.GilroyMedium,
    fontSize: 12,
    fontWeight: "600",
  },
  values: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  input: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.surface,
    borderRadius: 6,
    borderWidth: 1,
    width: 28,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 12,
    fontWeight: "600",
  },
});
