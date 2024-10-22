import React from "react";
import { StyleSheet, View, Text } from "react-native";
//
import { FONT } from "@/constants/THEME";
import { COLOR } from "@/features/phc-tab/constants/THEME";
import { CalendarHelper } from "@/utils/calendar/calendar.helper";

const getDateTime = () => {
  const calendarHelper = new CalendarHelper(null, "j F|h:i A");
  return calendarHelper.format.split("|");
};

const AppClock = () => {
  const [date, time] = getDateTime();
  console.log("🚀 ~ AppClock");
  // renders
  return (
    <View style={s.container}>
      <Text style={s.title}>{date}</Text>
      <Text style={s.subtitle}>{time}</Text>
    </View>
  );
};

export default React.memo(AppClock);

const s = StyleSheet.create({
  _: {},
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 16,
  },
  title: {
    color: COLOR.primary_dark,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    color: COLOR.text_faded,
    fontFamily: FONT.GilroyMedium,
    fontSize: 18,
    fontWeight: "600",
  },
});
