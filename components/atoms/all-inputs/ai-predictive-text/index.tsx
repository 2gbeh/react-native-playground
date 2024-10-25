import React from "react";
import { Text, View } from "react-native";
// 
import { PlusIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const AIPredictiveText: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AIPredictiveText");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.placeholder}>Click predictive text or type in text box</Text>
      <PlusIcon color={COLOR.surface} />
    </View>
  );
};

export default React.memo(AIPredictiveText);

import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.neutral_100,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placeholder: {
    color: COLOR.text_muted,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
