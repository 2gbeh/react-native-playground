import React from "react";
import { StyleSheet, View } from "react-native";
//
import Pagination from "@/components/atoms/filters/pagination";
import FilterByButtonSelector from "@/components/atoms/filters/filter-by-button-selector";
import FilterByLabelSelector from "@/components/atoms/filters/filter-by-label-selector";
import FilterByFunnelSelector from "@/components/atoms/filters/filter-by-funnel-selector";

const AppointmentsFilterBar = () => {
  console.log("🚀 ~ AppointmentsFilterBar");
  // renders
  return (
    <View style={s.container}>
      <FilterByButtonSelector />
      <FilterByLabelSelector />
      <FilterByFunnelSelector />
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
