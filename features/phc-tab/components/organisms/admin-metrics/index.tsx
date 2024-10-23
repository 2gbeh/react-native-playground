import React from "react";
import { StyleSheet, View } from "react-native";
//
import NoContentCard from "../../atoms/no-content-card";
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { GridIcon } from "@/features/phc-tab/constants/ICON";
//
import { renderKpiCards } from "./ui/render-kpi-cards";

interface IProps {}

const AdminMetrics: React.FC<IProps> = () => {
  console.log("🚀 ~ AdminMetrics");
  // renders
  return (
    <>
    {/* KPIs */}
      {renderKpiCards()}

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
