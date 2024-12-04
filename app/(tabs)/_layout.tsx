import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HomeIcon,
  HomeOutlineIcon,
  SettingsIcon,
  SettingsOutlineIcon,
} from "@/constants/Icons";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#dd4a00",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <HomeIcon color={color} />
              ) : (
                <HomeOutlineIcon color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) =>
              focused ? (
                <SettingsIcon color={color} />
              ) : (
                <SettingsOutlineIcon color={color} />
              ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
