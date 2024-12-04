import React, { PropsWithChildren } from "react";
import { Pressable, Text, View } from "react-native";
import { Href, router } from "expo-router";

interface IProps extends PropsWithChildren {
  href?: Href;
  back?: boolean;
}

const Tent: React.FC<IProps> = ({ children, href, back }) => {
  const handlePress = () =>
    back ? router.back() : href ? router.push(href) : undefined;
  // renders
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable onPress={handlePress}>
        <Text
          style={{
            fontFamily: "interMedium",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default React.memo(Tent);
