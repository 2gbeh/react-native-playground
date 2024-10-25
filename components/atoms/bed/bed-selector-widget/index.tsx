import React from "react";
import { StyleSheet, View } from "react-native";
// 
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const BedSelectorWidget: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ BedSelectorWidget");
  // renders
  return <View></View>;
};

export default React.memo(BedSelectorWidget);

const s = StyleSheet.create({ _: {}, container: {} });
