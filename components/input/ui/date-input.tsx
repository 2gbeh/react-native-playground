import React from "react";
import { View, Text, Pressable } from "react-native";
import { Calendar1Icon } from "lucide-react-native";
// 
import { inputStyles as s, inputIconProps } from "../styles";

interface IProps {}

const DateInput: React.FC<IProps> = ({}) => {
  console.log("🚀 ~ DateInput");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>Enter date</Text>
      <View style={s.input}>
        <Text style={s.placeholder}>Ex. 01 Jan, 1970</Text>
        <Calendar1Icon {...inputIconProps} />
      </View>
    </View>
  );
};

export default React.memo(DateInput);