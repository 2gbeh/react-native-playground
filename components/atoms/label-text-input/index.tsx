import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { labelTextInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
  defaultValue?: null | string;
  required?: boolean;
}

const LabelTextInput: React.FC<IProps> = ({
  label,
  placeholder,
  defaultValue,
  required,
}) => {
  console.log("🚀 ~ LabelTextInput");
  // renders
  return (
    <View style={s.container}>
      <View style={s.label_wrapper}>
        <Text style={s.label}>{label}</Text>
        {required && <Text style={s.asterisk}>*</Text>}
      </View>
      <View style={s.input}>
        <Text style={defaultValue ? s.value : s.placeholder}>
          {defaultValue || placeholder}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(LabelTextInput);
