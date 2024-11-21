import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ClockIcon } from "lucide-react-native";
// 
import { inputStyles as s, inputIconProps } from "../styles";

interface IProps {}

const TimeInput: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ TimeInput");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>Enter time</Text>
      <View style={s.input}>
        <Text style={s.placeholder}>Ex. 12:00 AM</Text>
        <ClockIcon {...inputIconProps} />
      </View>
    </View>
  );
};

export default React.memo(TimeInput);