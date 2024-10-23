import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
//
import { FONT,COLOR } from "@/constants/THEME";

interface IProps {
  tabs: string[];
  tabIndex?: number;
  onChange?: (index: number) => void;
}

const LabelTabs: React.FC<IProps> = ({
  tabs,
  tabIndex = 0,
  onChange = () => undefined,
}) => {
  console.log("🚀 ~ LabelTabs");
  // renders
  return (
    <View style={s.static.container}>
      {tabs.map((tab, i) => {
        const isActive = tabIndex === i;
        return (
          <Pressable key={i} style={s.static.button}>
            <Text style={s.label(isActive).transform}>{tab}</Text>
            <View style={s.indicator(isActive).transform}></View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default React.memo(LabelTabs);

const s = {
  static: StyleSheet.create({
    _: {},
    container: {
      borderBottomColor: COLOR.border,
      borderBottomWidth: 2,
      paddingBottom: 8,
      flexDirection: "row",
      alignItems: "center",
      columnGap: 24,
      position: "relative",
    },
    button: {
      cursor: "pointer",
      alignItems: "center",
      rowGap: 8,
    },
  }),
  label: (active = false) =>
    StyleSheet.create({
      transform: {
        color: active ? COLOR.primary : COLOR.tab_text,
        fontFamily: FONT.GilroyMedium,
        fontSize: 16,
        fontWeight: "600",
      },
    }),
  indicator: (active = false) =>
    StyleSheet.create({
      transform: {
        borderColor: active ? COLOR.primary : COLOR.none,
        borderWidth: 2,
        borderRadius: 10,
        width: 40,
        position: "absolute",
        bottom: -11,
      },
    }),
};
