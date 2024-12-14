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
import { COLOR } from "@/constants/THEME";
import { selectTheme } from "@/store/theme/theme.slice";
import { useAppSelector } from "@/store/store.config";
import { typographyStyles } from "@/styles/typography.styles";
import { View } from "react-native";

export default function MainLayout() {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ MainLayout");
  // RENDER
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLOR[theme].surface,
          height: 64,
        },
        headerTitleStyle: {
          ...typographyStyles.titleLarge,
          color: COLOR[theme].onSurface,
        },
        sceneStyle: {
          backgroundColor: COLOR[theme].surface,
        },
        tabBarStyle: {
          backgroundColor: COLOR[theme].surface,
          borderTopWidth: 0,
          height: 80,
          flexDirection: "row",
          alignItems: "center",
        },
        tabBarLabelStyle: {
          ...typographyStyles.labelMedium,
          marginTop: 4,
        },
        tabBarInactiveTintColor: COLOR[theme].onSurfaceVariant,
        tabBarActiveTintColor: COLOR[theme].onSurface,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          // headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: COLOR[theme].secondaryContainer,
                  borderRadius: 64,
                  width: 64,
                  height: 32,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HomeIcon color={COLOR[theme].onSecondaryContainer} />
              </View>
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
        name="reports/index"
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
