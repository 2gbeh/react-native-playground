import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";

interface IProps {}

const Hero: React.FC<IProps> = ({}) => {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ Hero");
  // RENDER
  return <View style={sx(theme).container} />;
};

export default React.memo(Hero);

export const sx = (theme: ThemeType) =>
  StyleSheet.create({
    _: {},
    container: {
      backgroundColor: COLOR[theme].surfaceContainer,
      borderRadius: 28,
    },
  });
