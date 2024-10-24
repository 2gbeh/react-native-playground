import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const addPatientScreenStyles = StyleSheet.create({
  _: {},
  container: {},
  form_wrapper: {
    rowGap: 16,
  },
  form_header: {
    marginBottom: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form_header_input: {
    flex: 1,
    alignItems: "flex-end",
  },
  input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 18,
  },
  footer: {
    alignSelf: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 32,
  },
});
