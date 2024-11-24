import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
// 
import { containerStyles } from "@/styles/container.styles";
import { typographyStyles } from "@/styles/typography.styles";

interface IProps extends PropsWithChildren {}

const Tent: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ Tent");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.h1}>{children}</Text>
    </View>
  );
};

export default React.memo(Tent);

const s = StyleSheet.create({
  _: {},
  container: {
    flex: 1,
    ...containerStyles.centered,
    rowGap: 16,
  },
  h1: {
    ...typographyStyles.body_lg,
  },
});
