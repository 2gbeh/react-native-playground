import React, { PropsWithChildren } from "react";
import { Pressable, View, Text } from "react-native";
//
import { ChevronDownIcon, ChevronUpIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
//
import { accordionStyle as s } from "./styles";

interface IProps extends PropsWithChildren {
  label: string;
  open?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<IProps> = ({
  children,
  label,
  open = true,
  onToggle = () => undefined,
}) => {
  console.log("🚀 ~ Accordion");
  // renders
  return (
    <View style={s.container}>
      <View style={s.section}>
        <Text style={s.label}>{label}</Text>
        <Pressable onPress={onToggle}>
          {open ? (
            <ChevronUpIcon color={COLOR.text_200} />
          ) : (
            <ChevronDownIcon color={COLOR.text_200} />
          )}
        </Pressable>
      </View>
      {/* CONTENT */}
      {open && children}
    </View>
  );
};

export default React.memo(Accordion);
