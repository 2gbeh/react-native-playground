import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
//
import { FONT,COLOR } from "@/constants/THEME";

type Variant = "solid" | "outline";

interface IProps extends PropsWithChildren {
  variant?: Variant;
}

const CTAButton: React.FC<IProps> = ({ children, variant = "solid" }) => {
  const { backgroundColor, borderColor, color } = variantStyles(variant);
  console.log("🚀 ~ CTAButton");
  // renders
  return (
    <Pressable style={[{ backgroundColor, borderColor }, s.button]}>
      <Text style={[{ color }, s.button_text]}>{children}</Text>
    </Pressable>
  );
};

export default React.memo(CTAButton);

const s = StyleSheet.create({
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

const variantStyles = (variant: Variant) =>
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
