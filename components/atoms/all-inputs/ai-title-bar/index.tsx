import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import AIText from "../ai-text";
import { MaximizeIcon, MinimizeIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const AITitleBar: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AITitleBar");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>Last clinic note</AIText>
      <View style={s.buttons}>
        <MinimizeIcon />
        <MaximizeIcon />
      </View>
    </View>
  );
};

export default React.memo(AITitleBar);

const s = StyleSheet.create({
  _: {},
  container: {
    // backgroundColor: COLOR.white,
    borderBottomColor: COLOR.surface,
    borderBottomWidth: 1,
    paddingBottom: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
});
