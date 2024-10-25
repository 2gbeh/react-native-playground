import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { BubbleAddIcon, BubbleCancelIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
//
import { aiBubblePickerStyles as s } from "./styles";

interface IProps {
  list?: string[];
  action?: (id: number | string) => void;
}

const AIBubblePicker: React.FC<IProps> = ({
  list = [],
  action = () => undefined,
}) => {
  console.log("🚀 ~ AIBubblePicker");
  // renders
  return (
    <View style={s.container}>
      {list.map((item, i) => {
        const isSelected = i < 1;
        return (
          <Pressable
            key={i}
            style={[
              s.bubble,
              {
                backgroundColor: isSelected
                  ? COLOR.selected_bubble
                  : COLOR.white,
              },
            ]}
            onPress={() => action(item)}
          >
            <Text style={s.label}>{item}</Text>
            {isSelected ? (
              <BubbleCancelIcon color={COLOR.text_faded} />
            ) : (
              <BubbleAddIcon color={COLOR.text_faded} />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default React.memo(AIBubblePicker);
