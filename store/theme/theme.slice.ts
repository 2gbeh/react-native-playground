import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.config";

interface SliceState {
  theme: "light" | "dark";
}

const initialState = {
  theme: "dark",
} satisfies SliceState as SliceState;

const slice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<SliceState["theme"]>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = slice.actions;
export default slice.reducer;

export const selectTheme = (state: RootState) => state.theme.theme;
