import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { ChevronDownIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
import { labelSelectorInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
}

const LabelSelectorInput: React.FC<IProps> = ({ label, placeholder }) => {
  console.log("🚀 ~ LabelSelectorInput");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.input}>
        <Text style={s.placeholder}>{placeholder}</Text>
        <ChevronDownIcon color={COLOR.text_muted}/>
      </View>
    </View>
  );
};

export default React.memo(LabelSelectorInput);
