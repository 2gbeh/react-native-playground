import React from "react";
import { Tabs } from "expo-router";
//
import {
  HomeIcon,
  HomeOutlineIcon,
  CartIcon,
  CartOutlineIcon,
  PieChartIcon,
  PieChartOutlineIcon,
} from "@/constants/ICON";

export default function MainLayout() {
  console.log("🚀 ~ MainLayout");
  // RENDER
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0093dd",
      }}
    >
      <Tabs.Screen
        name="home"
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
        name="bills/index"
        options={{
          title: "Bills",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <CartIcon color={color} />
            ) : (
              <CartOutlineIcon color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <PieChartIcon color={color} />
            ) : (
              <PieChartOutlineIcon color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
