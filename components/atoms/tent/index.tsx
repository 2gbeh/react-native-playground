import React, { PropsWithChildren } from "react";
import { Pressable, View, Text } from "react-native";
import { router } from "expo-router";
//
import { FONT, COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  auth?: boolean;
}

const Tent: React.FC<IProps> = ({ children, auth }) => {
  console.log("🚀 ~ Tent");
  // renders
  return (
    <View
      style={{
        backgroundColor: auth ? COLOR.primary_dark : COLOR.background,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 16,
      }}
    >
      <Pressable onPress={() => router.back()}>
        <Text
          style={{
            color: auth ? COLOR.background : COLOR.primary_dark,
            fontFamily: FONT.GilroyMedium,
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Tent);
