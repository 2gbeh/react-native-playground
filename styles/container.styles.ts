import { StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
  _: {},
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  row_center: {
    flexDirection: "row",
    alignItems: "center",
  },
  row_center_around: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  row_center_between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row_center_center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  row_center_end: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  row_end_between: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  row_start_between: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row_start_end: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
