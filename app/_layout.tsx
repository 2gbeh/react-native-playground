import "react-native-reanimated";

import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
// 
import { useRootLayout } from "@/hooks/useRootLayout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loaded = useRootLayout();

  return !loaded ? null : (
    <>
      <Slot />
      <StatusBar style="dark" />
    </>
  );
}
