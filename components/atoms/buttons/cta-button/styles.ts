import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export type Variant = "solid" | "outline" | "success";

export const ctaButtonStyles = StyleSheet.create({
  _: {},
  button: {
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});

export const ctaButtonVariantStyles = (variant: Variant, disabled?: boolean) =>
  ({
    solid: {
      backgroundColor: disabled ? COLOR.disabled : COLOR.primary,
      color: disabled ? COLOR.text_muted : COLOR.white,
      borderColor: disabled ? COLOR.neutral_100 : COLOR.primary,
    },
    outline: {
      backgroundColor: COLOR.white,
      color: disabled ? COLOR.text_muted : COLOR.primary,
      borderColor: disabled ? COLOR.neutral_100 : COLOR.primary,
    },
    success: {
      backgroundColor: disabled ? COLOR.disabled : COLOR.success,
      color: disabled ? COLOR.text_muted : COLOR.white,
      borderColor: disabled ? COLOR.neutral_100 : COLOR.success,
    },
  }[variant]);
