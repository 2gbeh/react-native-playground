import React, { PropsWithChildren } from "react";
import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
//
import { useAppSelector } from "@/store/store.config";
import { selectTheme } from "@/store/theme/theme.slice";
import { COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {}

const RNPaperProvider: React.FC<IProps> = ({ children }) => {
  const theme = useAppSelector(selectTheme);
  const theme_ = {
    ...DefaultTheme,
    colors: COLOR[theme],
  };
  console.log("🚀 ~ RNPaperProvider");
  // RENDER
  return <PaperProvider theme={theme_}>{children}</PaperProvider>;
};

export default React.memo(RNPaperProvider);
