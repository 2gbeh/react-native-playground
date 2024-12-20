import React, { PropsWithChildren } from "react";
import { Text, View, Pressable, TextStyle, ViewStyle } from "react-native";
import { router } from "expo-router";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";
import { COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  action?: () => void;
  auth?: boolean;
}

const Tent: React.FC<IProps> = ({ children, action, auth }) => {
  const sx = themedStyles(useAppSelector(selectTheme));
  console.log("🚀 ~ Tent");
  // RENDER
  return (
    <View style={sx.container}>
      <Pressable onPress={() => (!!action ? action() : router.back())}>
        <Text style={sx.label}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Tent);

const themedStyles = (theme: ThemeType) => ({
  container: {
    ...containerStyles.centered,
    flex: 1,
    rowGap: 16,
  } as ViewStyle,
  label: {
    ...typographyStyles.titleLarge,
    color: COLOR[theme].onSurface,
  } as TextStyle,
});
