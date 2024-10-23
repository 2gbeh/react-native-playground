import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const Example: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Example");
  // renders
  return <View style={s.container}></View>;
};

export default React.memo(Example);

const s = StyleSheet.create({
  _: {},
  container: {},
});
