import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
import AIText from "../ai-text";
import { MaximizeIcon, MinimizeIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {
  title: string;
}

const AITitleBar: React.FC<IProps> = ({ title }) => {
  console.log("🚀 ~ AITitleBar");
  // renders
  return (
    <View style={s.container}>
      <AIText h1>{title}</AIText>
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
