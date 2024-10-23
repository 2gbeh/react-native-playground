import { Stack, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
//
import Header from "@/components/organisms/header";

export default function MainLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* HEADER */}
      <Header />
      {/* mMAIN */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="appointments" />
      </Stack>
    </SafeAreaView>
  );
}
