import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import AIText from "../ai-text";
import { FONT, COLOR } from "@/constants/THEME";

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

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 12,
  },
  list: {
    rowGap: 12,
  },
  list_item: {
    flexDirection: "row",
    columnGap: 10,
  },
  label: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    color: COLOR.text_200,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
  },
});
