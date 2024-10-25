import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { EditIcon } from "@/constants/ICON";

interface IProps {
  action?: () => void;
}

const EditButton: React.FC<IProps> = ({ action = () => undefined }) => {
  console.log("🚀 ~ EditButton");
  // renders
  return (
    <Pressable onPress={action} style={s.container}>
      <EditIcon color={COLOR.primary} />
      <Text style={s.label}>Edit</Text>
    </Pressable>
  );
};

export default React.memo(EditButton);

const s = StyleSheet.create({
  _: {},
  container: {
    borderColor: COLOR.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
