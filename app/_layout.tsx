import "expo-dev-client";
import "react-native-reanimated";

import { useEffect } from "react";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";
//
import { store } from "@/store/store.config";
import { COLOR, FONTS } from "@/constants/THEME";

SplashScreen.preventAutoHideAsync();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.light.primary,
    secondary: COLOR.light.secondary,
    tertiary: COLOR.light.tertiary,
  },
};

export default function RootLayout() {
  const [loaded] = useFonts(FONTS);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  console.log("🚀 ~ RootLayout");
  // RENDER
  return !loaded ? null : (
    <PaperProvider>
      <ReduxProvider store={store}>
        <Slot />
        {/* <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(stack)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack> */}
        <StatusBar style="auto" />
      </ReduxProvider>
    </PaperProvider>
  );
}
