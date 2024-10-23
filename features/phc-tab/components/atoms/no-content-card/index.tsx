import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";

interface IProps extends PropsWithChildren {
  icon: React.ReactNode;
  title: string;
  summary: string;
}

const NoContentCard: React.FC<IProps> = ({
  children,
  icon,
  title,
  summary,
}) => {
  console.log("🚀 ~ NoContentCard");
  // renders
  return (
    <View style={s.container}>
      <View style={s.circle}>
        <View style={s.inner_circle}>{icon}</View>
      </View>
      <View style={s.article}>
        <Text style={s.h1}>{title}</Text>
        <Text style={s.p}>{summary}</Text>
      </View>
      <View style={s._}>{children}</View>
    </View>
  );
};

export default React.memo(NoContentCard);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 10,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 24,
  },
  circle: {
    backgroundColor: COLOR.primary_25,
    borderRadius: 100,
    padding: 22,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  inner_circle: {
    backgroundColor: COLOR.primary_100,
    borderRadius: 100,
    padding: 22,
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  article: {
    alignItems: "center",
    rowGap: 8,
  },
  h1: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  p: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
});
