import React from "react";
import { Text, View } from "react-native";
//
import AIText from "../ai-text";
//
import { aiOrderedListStyles as s } from "./styles";

interface IProps {
  list?: string[];
}

const AIOrderedList: React.FC<IProps> = ({ list = [] }) => {
  console.log("🚀 ~ AIOrderedList");
  // renders
  return (
    <View style={s.container}>
      <AIText h3>Complaints</AIText>
      <View style={s.list}>
        {list.map((item, i) => (
          <View key={i} style={s.list_item}>
            <Text style={s.numbering}>{i + 1}.</Text>
            <Text style={s.value}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(AIOrderedList);
