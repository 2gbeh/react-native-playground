import { useReducer } from "react";
import {
  DateTimePickerEvent,
  EvtTypes,
} from "@react-native-community/datetimepicker";
import { format } from "date-fns";

type TDateTime = Date;
type TModeType = "date" | "time";
type TEventType = EvtTypes; // "set" | "dismissed";

interface State {
  date: TDateTime;
  time: TDateTime;
  showDate: boolean;
  showTime: boolean;
  dateChanged: boolean;
  timeChanged: boolean;
}

enum Action {
  TOGGLE,
  UPDATE,
  RESET,
}

const initialDateArg = {
  showDate: true,
  date: new Date(),
  dateChanged: false,
};

const initialTimeArg = {
  showTime: true,
  time: new Date(),
  timeChanged: false,
};

const initialArg: State = { ...initialDateArg, ...initialTimeArg };

function reducer(
  state: State,
  action: { type: Action; payload?: unknown }
): State {
  switch (action.type) {
    case Action.TOGGLE: {
      let mode = action.payload as TModeType;
      return mode === "date"
        ? { ...state, showDate: !state.showDate }
        : { ...state, showTime: !state.showTime };
    }
    case Action.UPDATE: {
      let { mode, eventType, value } = action.payload as {
        mode: TModeType;
        eventType: TEventType;
        value: TDateTime;
      };
      return mode === "date"
        ? eventType === "set"
          ? { ...state, showDate: false, date: value, dateChanged: true }
          : { ...state, showDate: false }
        : eventType === "set"
        ? { ...state, showTime: false, time: value, timeChanged: true }
        : { ...state, showTime: false };
    }
    case Action.RESET: {
      let mode = action.payload as TModeType;
      return mode === "date"
        ? { ...state, ...initialDateArg }
        : { ...state, ...initialTimeArg };
    }
    default:
      return state;
  }
}

export function useDateTimeWidgetReducer() {
  const [state, dispatch] = useReducer(reducer, initialArg);
  const isoDate = state.date.toJSON().split("T")[0];
  const isoTime = state.time.toJSON().split("T")[1].split(".")[0];
  //
  const toggleShowDate = () =>
    dispatch({
      type: Action.TOGGLE,
      payload: "date",
    });
  const toggleShowTime = () =>
    dispatch({
      type: Action.TOGGLE,
      payload: "time",
    });
  const setDate = ({ type: eventType }: DateTimePickerEvent, value?: Date) => {
    dispatch({
      type: Action.UPDATE,
      payload: {
        mode: "date",
        eventType,
        value,
      },
    });
  };
  const setTime = ({ type: eventType }: DateTimePickerEvent, value?: Date) => {
    dispatch({
      type: Action.UPDATE,
      payload: {
        mode: "time",
        eventType,
        value,
      },
    });
  };
  const resetDate = () =>
    dispatch({
      type: Action.RESET,
      payload: "date",
    });
  const resetTime = () =>
    dispatch({
      type: Action.RESET,
      payload: "time",
    });
  // 01 Jan, 1970
  const formatDate = (as = "d M, Y") => format(state.date, "dd MMM, yyyy");
  // 12:00 AM
  const formatTime = (as = "h:i A") => format(state.time, "hh:mm a");

  return {
    ...state,
    isoDate,
    isoTime,
    toggleShowDate,
    toggleShowTime,
    setDate,
    setTime,
    resetDate,
    resetTime,
    formatDate,
    formatTime,
  };
}
