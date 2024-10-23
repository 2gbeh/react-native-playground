import React, { PropsWithChildren, useState } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
//
import { ChevronDownIcon, ChevronUpIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";

interface IProps extends PropsWithChildren {
  label: string;
  open?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<IProps> = ({
  children,
  label,
  open = true,
  onToggle = () => undefined,
}) => {
  console.log("🚀 ~ Accordion");
  // renders
  return (
    <View style={s.container}>
      <View style={s.section}>
        <Text style={s.label}>{label}</Text>
        <Pressable onPress={onToggle}>
          {open ? (
            <ChevronUpIcon color={COLOR.text_200} />
          ) : (
            <ChevronDownIcon color={COLOR.text_200} />
          )}
        </Pressable>
      </View>
      {/* CONTENT */}
      {open && children}
    </View>
  );
};

export default React.memo(Accordion);

const s = StyleSheet.create({
  _: {},
  container: {
    marginTop: 16,
  },
  section: {
    backgroundColor: COLOR.surface,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 14,
    fontWeight: "600",
  },
});
