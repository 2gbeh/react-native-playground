import React from "react";
import { Pressable, View, Text } from "react-native";
//
import { ChevronDownIcon } from "@/constants/ICON";
import { COLOR } from "@/constants/THEME";
import { labelSelectorInputStyles as s } from "./styles";

interface IProps {
  label: string;
  placeholder: string;
  defaultValue?: null | string;
  required?: boolean;
}

const LabelSelectorInput: React.FC<IProps> = ({
  label,
  placeholder,
  defaultValue,
  required,
}) => {
  console.log("🚀 ~ LabelSelectorInput");
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
        <ChevronDownIcon color={COLOR.text_muted} />
      </View>
    </View>
  );
};

export default React.memo(LabelSelectorInput);
