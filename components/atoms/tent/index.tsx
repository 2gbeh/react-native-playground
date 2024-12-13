import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
//
import { COLOR, FONT } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  action?: () => void;
  auth?: boolean;
}

const Tent: React.FC<IProps> = ({
  children,
  action = () => undefined,
  auth,
}) => {
  console.log("🚀 ~ Tent");
  // RENDER
  return (
    <View style={s.container}>
      <Pressable onPress={action}>
        <Text style={[s.h1, { color: auth ? COLOR.white : COLOR.black }]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Tent);

const s = StyleSheet.create({
  _: {},
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
  },
  h1: {
    fontFamily: FONT.GilroyRegular,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
});
