import React from "react";
import { Text, View } from "react-native";
//
import AIText from "../ai-text";
// 
import { aiTranscriptsStyles as s  } from "./styles";

interface IProps {
  messages?: Array<{ time: string; message: string }>;
}

const AITranscripts: React.FC<IProps> = ({ messages = [] }) => {
  console.log("🚀 ~ AITranscripts");
  // renders
  return (
    <View style={s.container}>
      <AIText h3>History</AIText>
      <View style={s.list}>
        {messages.map((item, i) => (
          <View style={s.list_item} key={i}>
            <Text style={s.label}>{item.time}</Text>
            <Text style={s.value}>{item.message}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default React.memo(AITranscripts);
