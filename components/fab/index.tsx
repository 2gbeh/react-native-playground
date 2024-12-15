import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";
import { PlusIcon } from "@/constants/ICON";
import { containerStyles } from "@/styles/container.styles";

interface IProps {}

const FAB: React.FC<IProps> = ({}) => {
  const gotoAddTransaction = () => router.push('/transactions/create');
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ FAB");
  // RENDER
  return (
    <Pressable style={sx(theme).container} onPress={gotoAddTransaction}>
      <PlusIcon color={COLOR[theme].onPrimaryContainer} />
    </Pressable>
  );
};

export default React.memo(FAB);

export const sx = (theme: ThemeType) =>
  StyleSheet.create({
    _: {},
    container: {
      backgroundColor: COLOR[theme].primaryContainer,
      borderRadius: 16,
      padding: 16,
      width: 56,
      height: 56,
      ...containerStyles.rowCenterCenter,
      position: "absolute",
      bottom: 16,
      right: 16,
    },
  });
