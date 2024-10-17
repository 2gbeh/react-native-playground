import React from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLOR, FONT } from "@/constants/THEME";

interface IProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: Array<{ label: string; value: string }>;
  isDisabled?: boolean;
}
const ComboBox: React.FC<IProps> = ({
  placeholder = "Choose one",
  value,
  onChange,
  onBlur = () => undefined,
  options = [],
  isDisabled,
}) => {
  console.log("🚀 ~ ComboBox");
  // renders
  return (
    <Dropdown
      placeholder={placeholder}
      value={value}
      onChange={({ value }) => onChange(value)}
      onBlur={onBlur}
      data={options}
      valueField="value"
      labelField="label"
      searchField="label"
      searchPlaceholder="Search"
      search
      disable={isDisabled}
      mode="modal"
      placeholderStyle={s.placeholder}
      selectedTextStyle={s.selected}
      selectedTextProps={{ numberOfLines: 1 }}
      containerStyle={s.container}
      itemTextStyle={s.item}
      inputSearchStyle={s.input}
      searchPlaceholderTextColor={COLOR.text_muted}
      activeColor={COLOR.bubble_dark}
      fontFamily={FONT.RobotoRegular}
      style={s.input}
    />
  );
};

export default React.memo(ComboBox);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: COLOR.surface,
    borderColor: COLOR.surface,
    borderRadius: 16,
  },
  item: {
    color: COLOR.text_muted,
    fontSize: 14,
  },
  placeholder: {
    color: COLOR.text_muted,
    fontSize: 14,
  },
  selected: {
    color: COLOR.text,
  },
  input: {
    color: COLOR.text,
    // backgroundColor: COLOR.input,
    borderColor: COLOR.text_muted,
    borderBottomWidth: 1,
    // borderRadius: 4,
    paddingHorizontal: 16,
    height: 40,
    fontFamily: FONT.RobotoRegular,
    fontSize: 14,
    flex: 1,
  },
});
