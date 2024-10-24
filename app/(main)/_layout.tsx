import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, Slot } from "expo-router";
//
import Header from "@/components/organisms/header";
import { COLOR } from "@/constants/THEME";

export default function MainLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          backgroundColor: COLOR.background,
          paddingVertical: 16,
          paddingHorizontal: 32,
          flex: 1,
          rowGap: 24,
        }}
      >
        <Slot />
        {/* 
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="appointments" />
          <Stack.Screen name="patient/create" />
          <Stack.Screen name="/all-inputs/general-outpatient" />
          <Stack.Screen name="/all-inputs/antenatal" />
          <Stack.Screen name="/all-inputs/labor" />
        </Stack> 
        */}
      </View>
    </SafeAreaView>
  );
}
