import { StyleSheet } from "react-native";

export const inputIconProps = { color: "#999", size: 18 };

export const inputStyles = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
  },
  label: {
    color: "#051438",
  },
  input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: 10,
    paddingHorizontal: 10,
    width: 240,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeholder: {
    color: "#999",
  },
  value: {
    color: "#0B0C7D",
  },
  icon: {
    backgroundColor: "#0B0C7D",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
