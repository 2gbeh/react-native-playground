import { StyleSheet } from "react-native";
import { FONT, COLOR } from "@/constants/THEME";

export const addPatientScreenStyles = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.background,
    paddingVertical: 16,
    paddingHorizontal: 32,
    flex: 1,
    rowGap: 24,
  },
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
