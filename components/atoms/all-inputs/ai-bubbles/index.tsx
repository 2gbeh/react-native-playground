import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
//
import { BubbleCancelIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
//
import { aiBubblesStyles as s } from "./styles";

interface IProps {
  list?: string[];
  action?: (id: number | string) => void;
}

const AIBubbles: React.FC<IProps> = ({
  list = [],
  action = () => undefined,
}) => {
  console.log("🚀 ~ AIBubbles");
  // renders
  return (
    <View style={s.container}>
      {list.map((item, i) => (
        <Pressable key={i} style={s.bubble} onPress={() => action(item)}>
          <Text style={s.label}>{item}</Text>
          <BubbleCancelIcon color={COLOR.text_faded} />
        </Pressable>
      ))}
    </View>
  );
};

export default React.memo(AIBubbles);
