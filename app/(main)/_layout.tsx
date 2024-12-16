import React from "react";
import { ViewStyle, View, Text } from "react-native";
import { Tabs } from "expo-router";
import { capitalize } from "lodash";
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
import { useDeviceManager } from "@/hooks/useDeviceManager";
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { typographyStyles } from "@/styles/typography.styles";

export default function MainLayout() {
  const { isTablet } = useDeviceManager();
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ MainLayout");
  // RENDER
  return (
    <Tabs
      screenOptions={{
        ...tabBarLayoutOptions(theme),
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: false,
          ...tabBarScreenOptions("home", theme, isTablet),
        }}
      />
      <Tabs.Screen
        name="bills/index"
        options={tabBarScreenOptions("bills", theme, isTablet)}
      />
      <Tabs.Screen
        name="reports/index"
        options={tabBarScreenOptions("reports", theme, isTablet)}
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

const tabBarScreenOptions = (
  title: string,
  theme: ThemeType,
  isTablet?: boolean
) => ({
  title: capitalize(title),
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    const iconProps = {
      color:
        COLOR[theme][focused ? "onSecondaryContainer" : "onSurfaceVariant"],
    };
    const renderIcon = {
      active: <HomeIcon {...iconProps} />,
      inactive: <HomeOutlineIcon {...iconProps} />,
    };
    switch (title) {
      case "bills":
        renderIcon.active = <CartIcon {...iconProps} />;
        renderIcon.inactive = <CartOutlineIcon {...iconProps} />;
        break;
      case "reports":
        renderIcon.active = <PieChartIcon {...iconProps} />;
        renderIcon.inactive = <PieChartOutlineIcon {...iconProps} />;
        break;
      default:
        break;
    }
    return (
      <View
        style={{
          flexDirection: isTablet ? "row" : "column",
          alignItems: "center",
          rowGap: 4,
        }}
      >
        <View
          style={{
            ...(!isTablet && {
              backgroundColor: focused
                ? COLOR[theme]["secondaryContainer"]
                : COLOR.none,
            }),
            borderRadius: 100,
            width: 64,
            height: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderIcon[focused ? "active" : "inactive"]}
        </View>
        <Text
          style={{
            color:
              COLOR[theme][
                focused
                  ? isTablet
                    ? "onSecondaryContainer"
                    : "onSurface"
                  : "onSurfaceVariant"
              ],
            ...typographyStyles[focused ? "labelMediumBold" : "labelMedium"],
          }}
        >
          {capitalize(title)}
        </Text>
      </View>
    );
  },
});
