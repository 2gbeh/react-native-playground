import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const Component: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Component");
  // renders
  return <View style={s.container}></View>;
};

export default React.memo(Component);

const s = StyleSheet.create({
  _: {},
  container: {},
});
