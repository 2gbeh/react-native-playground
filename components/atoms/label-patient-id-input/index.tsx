import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { labelPatientIdInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
}

const LabelPatientIdInput: React.FC<IProps> = ({ label, placeholder }) => {
  console.log("🚀 ~ LabelPatientIdInput");
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

export default React.memo(LabelPatientIdInput);
