import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
  visible: boolean;
  as: "alert" | "toast";
  title: string;
  message: string;
};

const initialState = {
  visible: false,
  as: "toast",
  title: "",
  message: "",
} satisfies SliceState as SliceState;

const slice = createSlice({
  name: "noticeSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    showAlert: (state, action: PayloadAction<[string, string]>) => {
      let [title, message] = action.payload;
      state.visible = true;
      state.as = "alert";
      state.title = title;
      state.message = message;
    },
    showToast: (state, action: PayloadAction<string>) => {
      let message = action.payload;
      state.visible = true;
      state.as = "toast";
      state.message = message;
    },
    dismiss: (state) => {
      state.visible = false;
    },
  },
});

export const noticeActions = slice.actions;
export default slice.reducer;
