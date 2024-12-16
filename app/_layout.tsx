import "expo-dev-client";
import "react-native-reanimated";

import { useEffect } from "react";
import { Stack } from "expo-router";
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
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(main)" />
        <Stack.Screen
          name="transactions/create"
          options={{
            title: "Add Transaction",
            headerShown: true,
            presentation: "formSheet",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ReduxProvider>
  );
}
