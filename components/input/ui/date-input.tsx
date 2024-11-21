import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Calendar1Icon } from "lucide-react-native";
//
import DateWidget from "@/components/date-widget";
import { useDateTimePickerReducer } from "@/hooks/useDateTimePickerReducer";
import { inputStyles as S, inputIconProps } from "../styles";

interface IProps {}

const DateInput: React.FC<IProps> = ({}) => {
  const { showDate, toggleShowDate, date, setDate, dateChanged, isoDate } =
    useDateTimePickerReducer();
  console.log("🚀 ~ DateInput");
  // renders
  return (
    <View style={s.container}>
      <View style={S.container}>
        <Text style={S.label}>Enter date</Text>
        <Pressable style={S.input} onPress={toggleShowDate}>
          <Text style={dateChanged ? S.value : S.placeholder}>
            {dateChanged ? isoDate : "Ex. 01 Jan, 1970"}
          </Text>
          <Calendar1Icon {...inputIconProps} />
        </Pressable>
      </View>
      {showDate && <DateWidget value={date} onChange={setDate} />}
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
