import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const avatarNameBioStyles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.surface,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  left_content: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  right_content: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  text: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
