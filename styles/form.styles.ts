import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  form: {
    rowGap: 16,
  },
  form_control: {
    rowGap: 8,
  },
  label: {
    color: "#ddd",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    height: 40,
  },
  password_wrapper: {
    position: "relative",
  },
  password_icon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  error: {
    color: "red",
  },
});
