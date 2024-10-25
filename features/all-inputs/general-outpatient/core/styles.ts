import { StyleSheet } from "react-native";

export const generalOutpatientStyles = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 24,
    flex: 1,
  },
  left: {
    flex: 2,
    rowGap: 32,
  },
  right: {
    flex: 1,
  },
  footer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
});