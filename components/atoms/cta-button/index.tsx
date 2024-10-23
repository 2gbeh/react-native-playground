import React, { PropsWithChildren } from "react";
import { Text, Pressable } from "react-native";
// 
import {
  Variant,
  ctaButtonStyles as s,
  ctaButtonVariantStyles,
} from "./styles";

interface IProps extends PropsWithChildren {
  action?: () => void;
  variant?: Variant;
}

const CTAButton: React.FC<IProps> = ({
  children,
  action = () => undefined,
  variant = "solid",
}) => {
  const { backgroundColor, borderColor, color } =
    ctaButtonVariantStyles(variant);
  console.log("🚀 ~ CTAButton");
  // renders
  return (
    <Pressable
      onPress={action}
      style={[{ backgroundColor, borderColor }, s.button]}
    >
      <Text style={[{ color }, s.button_text]}>{children}</Text>
    </Pressable>
  );
};

export default React.memo(CTAButton);
