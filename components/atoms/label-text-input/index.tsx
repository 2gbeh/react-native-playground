import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { labelTextInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
}

const LabelTextInput: React.FC<IProps> = ({ label, placeholder }) => {
  console.log("🚀 ~ LabelTextInput");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.input}>
        <Text style={s.placeholder}>{placeholder}</Text>
      </View>
    </View>
  );
};

export default React.memo(LabelTextInput);
