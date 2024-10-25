import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import CardWrapper from "@/components/atoms/cards/card-wrapper";

interface IProps {}

const Complaints: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ Complaints");
  // renders
  return (
    <View style={s._}>
      <Text style={s.title}>Complaints</Text>
      <CardWrapper></CardWrapper>
    </View>
  );
};

export default React.memo(Complaints);

const s = StyleSheet.create({
  _: {},
  container: {},
  title: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyBold,
    fontSize: 18,
    fontWeight: "700",
  },
});
