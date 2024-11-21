import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Calendar1Icon, ListRestartIcon } from "lucide-react-native";
//
import DateTimeWidget, {
  useDateTimeWidgetReducer,
} from "@/components/date-time-widget";
import { inputStyles as S, inputIconProps } from "../styles";

interface IProps {}

const DateInput: React.FC<IProps> = ({}) => {
  const {
    showDate,
    toggleShowDate,
    date,
    setDate,
    dateChanged,
    resetDate,
    formatDate,
  } = useDateTimeWidgetReducer();
  console.log("🚀 ~ DateInput");
  // renders
  return (
    <View style={s.container}>
      <View style={S.container}>
        <Text style={S.label}>Enter date</Text>
        <View style={S.input_wrapper}>
          <Pressable style={S.input} onPress={toggleShowDate}>
            <Text style={dateChanged ? S.value : S.placeholder}>
              {dateChanged ? formatDate() : "Ex. 01 Jan, 1970"}
            </Text>
            <Calendar1Icon {...inputIconProps} />
          </Pressable>
          <Pressable style={S.icon} onPress={resetDate}>
            <ListRestartIcon {...inputIconProps} color="#fff" />
          </Pressable>
        </View>
      </View>
      {showDate && <DateTimeWidget value={date} onChange={setDate} />}
    </View>
  );
};

export default React.memo(DateInput);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
  },
});
