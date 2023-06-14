import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "..";
import { THEME } from "../../constants/themes";

export interface SettingsState {
  theme: THEME;
}

const initialState: SettingsState = {
  theme: THEME.LIGHT,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    },
  },
});

export const { toggleTheme } = settingsSlice.actions;

export const selectTheme = (state: AppState) => state.settings.theme;

export const settingsReducer = settingsSlice.reducer;
