import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export { useDateTimeWidgetReducer } from "./hook";

interface IProps {
  value?: Date;
  onChange?: (event: DateTimePickerEvent, date?: Date | undefined) => void;
  variant?: "date" | "time";
}

const DateTimeWidget: React.FC<IProps> = ({
  value,
  onChange = () => undefined,
  variant = "date",
}) => {
  console.log("🚀 ~ DateTimeWidget");
  // renders
  return (
    <View style={s.container}>
      <DateTimePicker
        value={value || new Date()}
        onChange={onChange}
        mode={variant}
        display={Platform.OS === "ios" ? "spinner" : "default"}
        textColor="#fff"
      />
    </View>
  );
};

export default React.memo(DateTimeWidget);

const s = StyleSheet.create({
  _: {},
  container: {
    backgroundColor: "#677597",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
  },
});
