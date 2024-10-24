import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import BackButton from "@/components/atoms/back-button";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const AllInputsMenuBar: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AllInputsMenuBar");
  // renders
  return (
    <View style={s.container}>
      <BackButton>All inputs</BackButton>
    </View>
  );
};

export default React.memo(AllInputsMenuBar);

const s = StyleSheet.create({
  _: {},
  container: {},
});
