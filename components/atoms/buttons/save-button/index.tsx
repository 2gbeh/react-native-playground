import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { SaveIcon } from "@/constants/ICON";

interface IProps {
  action?: () => void;
}

const SaveButton: React.FC<IProps> = ({ action = () => undefined }) => {
  console.log("🚀 ~ SaveButton");
  // renders
  return (
    <Pressable onPress={action} style={s.container}>
      <SaveIcon color={COLOR.success} />
      <Text style={s.label}>Save</Text>
    </Pressable>
  );
};

export default React.memo(SaveButton);

const s = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.success,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.success,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
