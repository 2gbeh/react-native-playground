import React from "react";
import { View, Text, Pressable } from "react-native";
//
import { labelTabsStyles as s } from "./styles";

interface IProps {
  tabs: string[];
  tabIndex?: number;
  onChange?: (index: number) => void;
}

const LabelTabs: React.FC<IProps> = ({
  tabs,
  tabIndex = 0,
  onChange = () => undefined,
}) => {
  console.log("🚀 ~ LabelTabs");
  // renders
  return (
    <View style={s.static.container}>
      {tabs.map((tab, i) => {
        const isActive = tabIndex === i;
        return (
          <Pressable key={i} style={s.static.button}>
            <Text style={s.label(isActive).transform}>{tab}</Text>
            <View style={s.indicator(isActive).transform}></View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default React.memo(LabelTabs);
