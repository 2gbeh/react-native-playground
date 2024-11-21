import { StyleSheet, View } from "react-native";
// 
import DateInput from "@/components/input/ui/date-input";
import TimeInput from "@/components/input/ui/time-input";
import DateTimeInput from "@/components/input/ui/date-time-input";

export default function HomeScreen() {
  console.log("🚀 ~ HomeScreen");
  // renders
  return (
    <View style={s.container}>
      <View style={s.grid}>
        <DateInput />
        <TimeInput />
      </View>
      <DateTimeInput />
    </View>
  );
}

const s = StyleSheet.create({
  _: {},
  container: {
    flex: 1,
    backgroundColor: "#EDF0F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    rowGap: 16,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
});
