import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { ChevronDownIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
import { labelGovtIdInputStyles as s } from "./styles";

interface IProps {
  label: string;
}

const LabelGovtIDInput: React.FC<IProps> = ({ label }) => {
  console.log("🚀 ~ LabelGovtIDInput");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.input}>
        <View style={s.input_type}>
          <Text style={s.placeholder}>ID type</Text>
          <ChevronDownIcon color={COLOR.text_muted} />
        </View>
        <View style={s.input_value}>
          <Text style={s.placeholder}>ID number</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(LabelGovtIDInput);
