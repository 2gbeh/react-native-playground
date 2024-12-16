import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { typographyStyles } from "@/styles/typography.styles";

interface IProps {
  title: string;
  isActive: boolean;
  isTablet?: boolean;
}

const TabBarIcon: React.FC<IProps> = ({ title, isActive, isTablet }) => {
  const theme = useAppSelector(selectTheme);
  const iconProps = {
    color: COLOR[theme][isActive ? "onSecondaryContainer" : "onSurfaceVariant"],
  };
  const renderIcon = {
    active: <HomeIcon {...iconProps} />,
    inactive: <HomeOutlineIcon {...iconProps} />,
  };
  switch (title) {
    case "Bills":
      renderIcon.active = <CartIcon {...iconProps} />;
      renderIcon.inactive = <CartOutlineIcon {...iconProps} />;
      break;
    case "Reports":
      renderIcon.active = <PieChartIcon {...iconProps} />;
      renderIcon.inactive = <PieChartOutlineIcon {...iconProps} />;
      break;
    default:
      break;
  }
  console.log("🚀 ~ TabBarIcon");
  // RENDER
  return (
    <View style={sx(theme, isActive, isTablet).container}>
      <View style={sx(theme, isActive, isTablet).activeIndicator}>
        {renderIcon[isActive ? "active" : "inactive"]}
      </View>
      <Text style={sx(theme, isActive, isTablet).label}>{title}</Text>
    </View>
  );
};

export default React.memo(TabBarIcon);

export const sx = (theme: ThemeType, isActive?: boolean, isTablet?: boolean) =>
  StyleSheet.create({
    _: {},
    container: {
      flexDirection: isTablet ? "row" : "column",
      alignItems: "center",
      rowGap: 4,
    },
    activeIndicator: {
      ...(!isTablet && {
        backgroundColor: isActive
          ? COLOR[theme]["secondaryContainer"]
          : COLOR.none,
      }),
      borderRadius: 100,
      width: 64,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      color:
        COLOR[theme][
          isActive
            ? isTablet
              ? "onSecondaryContainer"
              : "onSurface"
            : "onSurfaceVariant"
        ],
      ...typographyStyles[isActive ? "labelMediumBold" : "labelMedium"],
    },
  });
