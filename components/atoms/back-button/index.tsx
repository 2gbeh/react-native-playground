import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronLeftIcon } from "@/constants/ICON";

interface IProps extends PropsWithChildren {
  action?: () => void;
}

const BackButton: React.FC<IProps> = ({ children, action }) => {
  console.log("🚀 ~ BackButton");
  // renders
  return (
    <Pressable
      onPress={() => (!!action ? action() : router.back())}
      style={s.container}
    >
      <ChevronLeftIcon />
      <Text style={s.heading}>{children}</Text>
    </Pressable>
  );
};

export default React.memo(BackButton);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  heading: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
});
