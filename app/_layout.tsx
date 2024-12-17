import "expo-dev-client";
import "react-native-reanimated";

import { useEffect } from "react";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Provider as ReduxProvider } from "react-redux";
//
import { store } from "@/store/store.config";
import { FONTS } from "@/constants/THEME";

SplashScreen.preventAutoHideAsync();

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
    <ReduxProvider store={store}>
      <Slot />
      {/* <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(stack)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack> */}
      <StatusBar style="auto" />
    </ReduxProvider>
  );
}
