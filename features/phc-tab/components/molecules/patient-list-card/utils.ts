import { CalendarHelper } from "@/utils/calendar/calendar.helper";

const formatDateTime = (date: string | Date) => {
  const calendarHelper = new CalendarHelper(date, "h:ia | j M Y");
  return calendarHelper.format;
};

export const patientListCardutils = { formatDateTime };
