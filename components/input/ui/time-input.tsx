import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { ClockIcon, ListRestartIcon } from "lucide-react-native";
//
import DateTimeWidget, {
  useDateTimeWidgetReducer,
} from "@/components/date-time-widget";
import { inputStyles as S, inputIconProps } from "../styles";

interface IProps {}

const TimeInput: React.FC<IProps> = ({}) => {
  const {
    showTime,
    toggleShowTime,
    time,
    setTime,
    timeChanged,
    resetTime,
    formatTime,
  } = useDateTimeWidgetReducer();
  console.log("🚀 ~ TimeInput");
  // renders
  return (
    <View style={s.container}>
      <View style={S.container}>
        <Text style={S.label}>Enter time</Text>
        <View style={S.input_wrapper}>
          <Pressable style={S.input} onPress={toggleShowTime}>
            <Text style={timeChanged ? S.value : S.placeholder}>
              {timeChanged ? formatTime() : "Ex. 12:00 AM"}
            </Text>
            <ClockIcon {...inputIconProps} />
          </Pressable>
          <Pressable style={S.icon} onPress={resetTime}>
            <ListRestartIcon {...inputIconProps} color="#fff" />
          </Pressable>
        </View>
      </View>
      {showTime && (
        <DateTimeWidget value={time} onChange={setTime} variant="time" />
      )}
    </View>
  );
};

export default React.memo(TimeInput);

const s = StyleSheet.create({
  _: {},
  container: {
    rowGap: 8,
  },
});
