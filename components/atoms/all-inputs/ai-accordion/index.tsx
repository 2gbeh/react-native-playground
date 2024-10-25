import React, { PropsWithChildren } from "react";
import { Pressable, View, Text } from "react-native";
//
import { ChevronDownIcon, ChevronUpIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
//
import { aiAccordionStyles as s } from "./styles";

interface IProps extends PropsWithChildren {
  heading: string;
  open?: boolean;
  onToggle?: () => void;
}

const AIAccordion: React.FC<IProps> = ({
  children,
  heading,
  open = true,
  onToggle = () => undefined,
}) => {
  console.log("🚀 ~ AIAccordion");
  // renders
  return (
    <View style={s.static.container}>
      <View style={s.header(open).transform}>
        <Text style={s.static.heading}>{heading}</Text>
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

export default React.memo(AIAccordion);
