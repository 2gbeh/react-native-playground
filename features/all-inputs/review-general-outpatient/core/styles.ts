import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const reviewGeneralOutpatientStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 24,
    flex: 1,
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
  },
  left_card_wrapper: {
    rowGap: 19,
  },
  left_header: {
    borderBottomColor: COLOR.surface,
    borderBottomWidth: 1,
    paddingBottom: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_section: {
    rowGap: 12,
  },
  right_card_wrapper: {
    rowGap: 19,
  },
  summary: {
    color: COLOR.text_200,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  right_footer: {
    marginTop: 16,
  },
});
