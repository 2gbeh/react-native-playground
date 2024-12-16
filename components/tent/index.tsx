import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { router } from "expo-router";
//
import { useAppSelector } from "@/store/store.config";
import { ThemeType, selectTheme } from "@/store/theme/theme.slice";
import { COLOR, FONT } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  action?: () => void;
  auth?: boolean;
}

const Tent: React.FC<IProps> = ({ children, action, auth }) => {
  const theme = useAppSelector(selectTheme);
  console.log("🚀 ~ Tent");
  // RENDER
  return (
    <View style={sx.container}>
      <Pressable onPress={() => (!!action ? action() : router.back())}>
        <Text style={[sx.label, { color: COLOR[theme].onSurface }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Tent);

const sx = StyleSheet.create({
  _: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
  },
  label: {
    fontFamily: FONT.RobotoRegular,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
});
