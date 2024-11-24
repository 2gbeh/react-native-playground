import { StyleSheet, View, Image } from "react-native";
import Tent from "@/components/atoms/tent";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // renders
  return <Tent>HomeScreen</Tent>;
}

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: "#EDF0F8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 16,
  },
  logo: { alignSelf: "center" },
});
