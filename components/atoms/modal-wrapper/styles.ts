import { StyleSheet } from "react-native";
import { COLOR, FONT } from "@/constants/THEME";

export const modalWrapperStyles = StyleSheet.create({
  overlay: {
    backgroundColor: COLOR.opacity.point75,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: COLOR.background,
    borderRadius: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.neutral_100,
    paddingVertical: 16,
    marginHorizontal: 20,
    // marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 18,
    fontWeight: "700",
  },
  cancel: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 8,
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: COLOR.background,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});
