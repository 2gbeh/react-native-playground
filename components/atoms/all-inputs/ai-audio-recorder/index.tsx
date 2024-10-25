import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
//
import { AudioIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps {}

const AIAudioRecorder: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ AIAudioRecorder");
  // renders
  return (
    <View style={s.container}>
      <AudioIcon color={COLOR.primary_dark} />
      <Text style={s.label}>Record audio</Text>
    </View>
  );
};

export default React.memo(AIAudioRecorder);

const s = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
