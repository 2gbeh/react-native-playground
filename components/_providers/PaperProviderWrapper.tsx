import React from "react";
import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
//
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";

const PaperProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useAppSelector(selectTheme);
  const paperTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...COLOR[theme],
    },
  };
  console.log("🚀 ~ PaperProviderWrapper");
  // RENDER
  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
};

export default React.memo(PaperProviderWrapper);
