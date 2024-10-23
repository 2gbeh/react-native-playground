import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export type Variant = "solid" | "outline";

export const ctaButtonStyles = StyleSheet.create({
  _: {},
  button: {
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 12,
    paddingHorizontal: 16,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});

export const ctaButtonVariantStyles = (variant: Variant) =>
  ({
    solid: {
      backgroundColor: COLOR.primary,
      color: COLOR.white,
      borderColor: COLOR.primary,
    },
    outline: {
      backgroundColor: COLOR.white,
      color: COLOR.primary,
      borderColor: COLOR.primary,
    },
  }[variant]);
