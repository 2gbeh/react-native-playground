import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Href, Link } from "expo-router";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/features/phc-tab/constants/ICON";

interface IProps extends PropsWithChildren {
  href: Href<string | object>;
  chevron?: "none" | "left" | "right";
}

const Hyperlink: React.FC<IProps> = ({ children, href, chevron = "none" }) => {
  console.log("🚀 ~ Hyperlink");
  // renders
  return (
    <Link href={href} style={s.container}>
      {chevron === "left" && (
        <View style={{ marginRight: 8 }}>
          <ChevronLeftIcon color={COLOR.primary} />
        </View>
      )}
      <Text style={s.link_text}>{children}</Text>
      {chevron === "right" && (
        <View style={{ marginLeft: 8 }}>
          <ChevronRightIcon color={COLOR.primary} />
        </View>
      )}
    </Link>
  );
};

export default React.memo(Hyperlink);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  link_text: {
    color: COLOR.primary,
    textDecorationLine: "underline",
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
