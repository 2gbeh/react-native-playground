import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
//
import { FONT, COLOR } from "@/constants/THEME";
import { ChevronLeftIcon } from "@/constants/ICON";
import { ChevronRightIcon } from "lucide-react-native";

const Pagination = () => {
  console.log("🚀 ~ Pagination");
  // renders
  return (
    <View style={s.container}>
      <View style={s.labels}>
        <Text style={s.label}>1 - 10</Text>
        <Text style={s.of}>of</Text>
        <Text style={s.label}>10</Text>
      </View>
      <View style={s.buttons}>
        <Pressable style={[s.button, s.prev]}>
          <ChevronLeftIcon color={COLOR.primary_dark} />
        </Pressable>
        <Pressable style={[s.button, s.next]}>
          <ChevronRightIcon color={COLOR.primary_dark} />
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(Pagination);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 24,
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  label: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  of: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 16,
    fontWeight: "500",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  button: {
    backgroundColor: COLOR.pager_disabled,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 4,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  prev: {
    backgroundColor: COLOR.pager_disabled,
  },
  next: {
    backgroundColor: COLOR.white,
  },
});
