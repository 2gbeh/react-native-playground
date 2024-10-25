import React from "react";
import { StyleSheet, View } from "react-native";
//
import {
  ButtonSelectorFilter,
  GhostSelectorFilter,
  SortSelectorFilter,
  Pagination,
} from "@/components/atoms/filters";

const AppointmentsFilterBar = () => {
  console.log("🚀 ~ AppointmentsFilterBar");
  // renders
  return (
    <View style={s.container}>
      <ButtonSelectorFilter />
      <GhostSelectorFilter />
      <SortSelectorFilter />
      <Pagination />
    </View>
  );
};

export default React.memo(AppointmentsFilterBar);

const s = StyleSheet.create({
  _: {},
  container: {
    alignSelf: "flex-end",
    flexDirection: "row",
    columnGap: 24,
    alignItems: "center",
  },
});
