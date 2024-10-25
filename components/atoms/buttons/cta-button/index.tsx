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
  disabled?: boolean;
  minWidth?: number;
  height?: number;
  variant?: Variant;
}

const CTAButton: React.FC<IProps> = ({
  children,
  action = () => undefined,
  disabled,
  minWidth = 40,
  height = 40,
  variant = "solid",
}) => {
  const { backgroundColor, borderColor, color } = ctaButtonVariantStyles(
    variant,
    disabled
  );
  console.log("🚀 ~ CTAButton");
  // renders
  return (
    <Pressable
      onPress={action}
      disabled={disabled}
      style={[{ backgroundColor, borderColor, height, minWidth }, s.button]}
    >
      <Text style={[{ color }, s.button_text]}>{children}</Text>
    </Pressable>
  );
};

export default React.memo(CTAButton);
