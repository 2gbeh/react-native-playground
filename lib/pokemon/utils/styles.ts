import { StyleSheet } from "react-native";
import { COLOR } from "./constants";

export const colorPaletteStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  box: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
