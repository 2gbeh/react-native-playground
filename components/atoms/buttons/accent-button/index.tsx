import React, { PropsWithChildren } from "react";
import { Text, Pressable } from "react-native";
//
import { accentButtonStyles as s } from "./styles";
import { ChevronDownIcon } from "@/constants/ICON";

interface IProps extends PropsWithChildren {
  action?: () => void;
  disabled?: boolean;
  minWidth?: number;
  height?: number;
  selector?: boolean;
}

const AccentButton: React.FC<IProps> = ({
  children,
  action = () => undefined,
  disabled,
  minWidth = 40,
  height = 40,
  selector,
}) => {
  console.log("🚀 ~ AccentButton");
  // renders
  return (
    <Pressable
      onPress={action}
      disabled={disabled}
      style={[{ height, minWidth }, s.button]}
    >
      <Text style={s.button_text}>{children}</Text>
      {selector && <ChevronDownIcon />}
    </Pressable>
  );
};

export default React.memo(AccentButton);
