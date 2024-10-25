import React from "react";
import { StyleSheet, View } from "react-native";
//
import NoContentCard from "@/components/atoms/cards/no-content-card";
import { GridIcon } from "@/constants/ICON";
import { FONT, COLOR } from "@/constants/THEME";
//
import { renderKPICards } from "./ui/render-kpi-cards";

interface IProps {}

const AdminMetrics: React.FC<IProps> = () => {
  console.log("🚀 ~ AdminMetrics");
  // renders
  return (
    <>
      {/* KPIs */}
      {renderKPICards()}

      {/* CHARTS */}
      <NoContentCard
        icon={<GridIcon color={COLOR.white} />}
        title="No metric data"
        summary="Admin metrics will display here once the data needed is acquired"
      />
    </>
  );
};

export default React.memo(AdminMetrics);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.white,
    borderColor: COLOR.border,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
  },
  grid_item: {
    width: "24%",
  },
});
