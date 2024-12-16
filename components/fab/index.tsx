import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { router } from "expo-router";
//
import { useDeviceManager } from "@/hooks/useDeviceManager";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";
import { PlusIcon } from "@/constants/ICON";
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";

interface IProps {}

const FAB: React.FC<IProps> = ({}) => {
  const { isTablet } = useDeviceManager();
  const theme = useAppSelector(selectTheme);
  const gotoAddTransaction = () => router.push("/transactions/create");
  console.log("🚀 ~ FAB");
  // RENDER
  return (
    <Pressable
      style={sx(theme, isTablet).container}
      onPress={gotoAddTransaction}
    >
      <PlusIcon color={COLOR[theme].onPrimaryContainer} />
      {isTablet && <Text style={sx(theme).label}>New transaction</Text>}
    </Pressable>
  );
};

export default React.memo(FAB);

export const sx = (theme: ThemeType, isTablet?: boolean) =>
  StyleSheet.create({
    _: {},
    container: {
      backgroundColor: COLOR[theme].primaryContainer,
      borderRadius: 16,
      padding: 16,
      ...(isTablet ? { minWidth: 80 } : { width: 56 }),
      height: 56,
      ...containerStyles.rowCenterCenter,
      columnGap: 8,
      position: "absolute",
      bottom: 16,
      right: 16,
    },
    label: {
      color: COLOR[theme].onPrimaryContainer,
      ...typographyStyles.labelLarge,
    },
  });
