import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { labelTextInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

const LabelTextInput: React.FC<IProps> = ({ label, placeholder, required }) => {
  console.log("🚀 ~ LabelTextInput");
  // renders
  return (
    <View style={s.container}>
      <View style={s.label_wrapper}>
        <Text style={s.label}>{label}</Text>
        {required && <Text style={s.asterisk}>*</Text>}
      </View>
      <View style={s.input}>
        <Text style={s.placeholder}>{placeholder}</Text>
      </View>
    </View>
  );
};

export default React.memo(LabelTextInput);
