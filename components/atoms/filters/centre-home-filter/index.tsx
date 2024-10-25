import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { centreHomeFilterStyles as s } from "./styles";

interface IProps {
  tabIndex?: number;
  onChange?: (tabIndex: number) => void;
}

const CentreHomeFilter: React.FC<IProps> = ({
  tabIndex = 0,
  onChange = () => undefined,
}) => {
  console.log("🚀 ~ CentreHomeFilter");
  // renders
  return (
    <View style={s.static.container}>
      {["In Centre", "Home Visit"].map((item, i) => {
        let isActive = i === tabIndex;
        return (
          <Pressable
            key={i}
            style={s.button(isActive).transform}
            onPress={() => onChange(i)}
          >
            <Text style={s.button_text(isActive).transform}>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default React.memo(CentreHomeFilter);
