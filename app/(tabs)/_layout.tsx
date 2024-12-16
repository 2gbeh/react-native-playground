import React from "react";
import { ViewStyle } from "react-native";
import { Redirect, Tabs } from "expo-router";
//
import TabBarIcon from "@/components/tab-bar-icon";
import { useDeviceManager } from "@/hooks/useDeviceManager";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { selectCurrentUser } from "@/store/auth/auth.slice";
import { COLOR } from "@/constants/THEME";

export default function TabsLayout() {
  const me = useAppSelector(selectCurrentUser);
  const theme = useAppSelector(selectTheme);
  const { isTablet } = useDeviceManager();
  console.log("🚀 ~ TabsLayout");
  // RENDER
  return !me ? (
    <Redirect href="/login" />
  ) : (
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
