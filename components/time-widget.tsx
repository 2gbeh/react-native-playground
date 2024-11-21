import React from "react";
import { StyleSheet, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface IProps {
  value?: Date;
  onChange?: (event: DateTimePickerEvent, date?: Date | undefined) => void;
}

const TimeWidget: React.FC<IProps> = ({
  value,
  onChange = () => undefined,
}) => {
  console.log("🚀 ~ TimeWidget");
  // renders
  return (
    <View style={s.container}>
      <DateTimePicker
        value={value || new Date()}
        onChange={onChange}
        mode="date"
        display="inline"
      />
    </View>
  );
};

export default React.memo(TimeWidget);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
  },
});
