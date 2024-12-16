import React from "react";
import { ViewStyle } from "react-native";
import { Tabs } from "expo-router";
//
import TabBarIcon from "@/components/tab-bar-icon";
import { COLOR } from "@/constants/THEME";
import { useDeviceManager } from "@/hooks/useDeviceManager";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";

export default function MainLayout() {
  const { isTablet } = useDeviceManager();
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ MainLayout");
  // RENDER
  return (
    <Tabs screenOptions={tabBarLayoutOptions(theme)}>
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Home" isActive={focused} isTablet={isTablet} />
          ),
        }}
      />
      <Tabs.Screen
        name="bills/index"
        options={{
          title: "Bills",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon title="Bills" isActive={focused} isTablet={isTablet} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports/index"
        options={{
          title: "Reports",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Reports"
              isActive={focused}
              isTablet={isTablet}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const tabBarLayoutOptions = (theme: ThemeType) => ({
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: COLOR[theme].surface,
  },
  headerTitleStyle: {
    // ...typographyStyles.titleLarge,
    color: COLOR[theme].onSurface,
  },
  sceneStyle: {
    backgroundColor: COLOR[theme].surface,
  },
  tabBarStyle: {
    backgroundColor: COLOR[theme].surfaceContainer,
    borderTopWidth: 0,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  } as ViewStyle,
  tabBarShowLabel: false,
});
