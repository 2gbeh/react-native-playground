import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { BubbleAddIcon, BubbleCancelIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
//
import { aiBubblePickerStyles as s } from "./styles";

interface IProps {
  list?: string[];
  selected?: string[];
  action?: (id: number | string) => void;
}

const AIBubblePicker: React.FC<IProps> = ({
  list = [],
  selected = [],
  action = () => undefined,
}) => {
  console.log("🚀 ~ AIBubblePicker");
  // renders
  return (
    <View style={s.container}>
      {list.map((item, i) => {
        const isSelected = selected.includes(item);
        //
        return (
          <Pressable
            key={i}
            style={[
              s.bubble,
              {
                backgroundColor: isSelected ? COLOR.surface : COLOR.white,
                borderColor: isSelected ? COLOR.surface : COLOR.neutral_100,
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
