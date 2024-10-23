import React, { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";

interface IProps extends PropsWithChildren {}

const LabelTabs: React.FC<IProps> = ({ children }) => {
  console.log("🚀 ~ LabelTabs");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.tab_active}>Admin metrics</Text>
      <Text style={s.tab}>Clinical metrics</Text>
    </View>
  );
};

export default React.memo(LabelTabs);

const s = StyleSheet.create({
  _: {},
  container: {
    borderBottomColor: COLOR.border,
    borderBottomWidth: 2,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24,
  },
  tab_active: {
    color: COLOR.primary,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
  tab: {
    color: COLOR.tab_text,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "600",
  },
});
