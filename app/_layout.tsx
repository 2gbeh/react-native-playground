import "react-native-reanimated";

import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Provider } from 'react-redux'
//
import { store } from '@/store/store.config'
import { useRootLayout } from "@/hooks/useRootLayout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loaded = useRootLayout();

  return !loaded ? null : (
    <Provider store={store}>
      <Slot />
      <StatusBar style="dark" />
    </Provider>
  );
}
