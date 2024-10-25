import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const aiUnorderedListStyles = StyleSheet.create({
  _: {},
  list_item: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  bullet: {
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    width: 10,
    height: 10,
  },
  value: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 17,
    fontWeight: "600",
  },
  pipe: {
    backgroundColor: COLOR.surface,
    marginLeft: 4,
    width: 2,
    height: 15,
  },
});
