import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CalendarDaysIcon } from "lucide-react-native";
// 
import { inputStyles as s, inputIconProps } from "../styles";

interface IProps {}

const DateTimeInput: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ DateTimeInput");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>Enter date and time</Text>
      <View style={s.input}>
        <Text style={s.placeholder}>Ex. 01 Jan, 1970 12:00 AM</Text>
        <CalendarDaysIcon {...inputIconProps} />
      </View>
    </View>
  );
};

export default React.memo(DateTimeInput);