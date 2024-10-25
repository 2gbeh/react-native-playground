import React from "react";
import { Text, View } from "react-native";
//
import AIText from "../ai-text";
//
import { aiUnorderedListStyles as s } from "./styles";

interface IProps {
  list?: string[];
}

const AIUnorderedList: React.FC<IProps> = ({ list = [] }) => {
  console.log("🚀 ~ AIUnorderedList");
  // renders
  return (
    <View style={s._}>
      {list.map((item, i) => (
        <View key={i} style={s._}>
          <View style={s.list_item}>
            <View style={s.bullet}></View>
            <Text style={s.value}>{item}</Text>
          </View>
          {i < list.length-1 && <View style={s.pipe}></View>}
        </View>
      ))}
    </View>
  );
};

export default React.memo(AIUnorderedList);
