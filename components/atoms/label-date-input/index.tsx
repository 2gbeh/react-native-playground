import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { CalendarIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
import { labelDateInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

const LabelDateInput: React.FC<IProps> = ({ label, placeholder, required }) => {
  console.log("🚀 ~ LabelDateInput");
  // renders
  return (
    <View style={s.container}>
      <View style={s.label_wrapper}>
        <Text style={s.label}>{label}</Text>
        {required && <Text style={s.asterisk}>*</Text>}
      </View>
      <View style={s.input}>
        <Text style={s.placeholder}>{placeholder}</Text>
        <CalendarIcon color={COLOR.text_muted} />
      </View>
    </View>
  );
};

export default React.memo(LabelDateInput);
