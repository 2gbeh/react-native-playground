import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Href, Link } from "expo-router";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronLeftIcon, ChevronRightIcon } from "@/constants/ICON";

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
        <View style={s.icon}>
          <ChevronLeftIcon color={COLOR.primary} />
        </View>
      )}
      <Text style={s.label}>{children}</Text>
      {chevron === "right" && (
        <View style={s.icon}>
          <ChevronRightIcon color={COLOR.primary} />
        </View>
      )}
    </Link>
  );
};

export default React.memo(Hyperlink);

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: COLOR.primary,
    textDecorationLine: "underline",
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
  icon: {
    marginHorizontal: 8,
    top: 1,
  },
});
