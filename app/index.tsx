import { StyleSheet, View, Image } from "react-native";
//
import DateInput from "@/components/input/ui/date-input";
import TimeInput from "@/components/input/ui/time-input";
import DateTimeInput from "@/components/input/ui/date-time-input";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // renders
  return (
    <View style={s.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={s.logo}
      />
      <DateInput />
      <TimeInput />
      {/* <DateTimeInput /> */}
    </View>
  );
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
