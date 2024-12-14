import React from "react";
import { View } from "react-native";

interface IProps {
  length?: number;
}

const Whitespace: React.FC<IProps> = ({ length = 1 }) => {
  console.log("🚀 ~ Whitespace");
  // RENDER
  return Array.from({ length }).map((_, i) => (
    <View key={i} style={{ flex: 1 }} />
  ));
};

export default React.memo(Whitespace);
