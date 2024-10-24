import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ExclamationIcon } from "@/constants/ICON";

interface IProps {
  show?: boolean;
  action?: () => void;
  message: string;
}

const Warning: React.FC<IProps> = ({
  show,
  action = () => undefined,
  message,
}) => {
  console.log("🚀 ~ Warning");
  // renders
  return show ? (
    <Pressable style={s.container} onPress={action}>
      <ExclamationIcon color={COLOR.warning} />
      <Text style={s.text}>{message}</Text>
    </Pressable>
  ) : null;
};

export default React.memo(Warning);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.surface,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  text: {
    color: COLOR.warning,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "500",
  },
});
