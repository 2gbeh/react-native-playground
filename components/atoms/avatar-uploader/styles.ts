import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const avatarUploaderStyles = StyleSheet.create({
  _: {},
  container: {
    // backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
  form: {
    rowGap: 16,
  },
  button: {
    backgroundColor: COLOR.primary,
    color: COLOR.white,
    borderColor: COLOR.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    // paddingHorizontal: 20,
    width: 220,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
  },
  button_text: {
    color: COLOR.white,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  notice: {
    color: COLOR.tab_text,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
