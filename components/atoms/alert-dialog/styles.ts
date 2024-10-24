import { StyleSheet, Platform } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const alertDialogStyles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.opacity.point75,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: COLOR.background,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: 320,
    alignItems: "center",
    rowGap: 16,
  },
  heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
  body: {
    paddingHorizontal: 25,
    paddingBottom: Platform.OS === "web" ? 0 : 40,
    width: "100%",
    gap: 20,
  },
});
