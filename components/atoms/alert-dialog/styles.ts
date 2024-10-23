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
    paddingTop: 15,
    paddingBottom: 20,
    alignItems: "center",
    gap: 15,
  },
  heading: { color: COLOR.primary_dark, fontSize: 18, fontWeight: "600" },
  body: {
    paddingHorizontal: 25,
    paddingBottom: Platform.OS === "web" ? 0 : 40,
    width: "100%",
    gap: 20,
  },
});
