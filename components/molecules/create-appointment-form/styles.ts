import { StyleSheet } from "react-native";

export const createAppointmentFormStyles = StyleSheet.create({
  _: {},
  container: {
    width: 600,
    rowGap: 24,
  },
  inputs: {
    rowGap: 16,
  },
  buttons: {
    flexDirection: "row",
    paddingVertical: 16,
    columnGap: 32,
  },
  button: {
    flex: 1,
  },
});
