import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  CartIcon,
  CartOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
} from "@/constants/ICON";

export default function MainLayout() {
  const iconProps = { color: "#888", size: 24 };
  const colorScheme = useColorScheme();
  console.log("🚀 ~ MainLayout");
  // RENDER
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <HomeIcon color={color} />
            ) : (
              <HomeOutlineIcon color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <CartIcon color={color} />
            ) : (
              <CartOutlineIcon color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
