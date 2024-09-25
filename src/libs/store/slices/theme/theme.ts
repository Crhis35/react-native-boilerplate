import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './theme.model';

export const initialState: ThemeState = {
  theme: 'dark',
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (
      state,
      { payload: { theme, darkMode } }: PayloadAction<ThemeState>,
    ) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme;
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode;
      }
    },
    setDefaultTheme: (
      state,
      { payload: { theme, darkMode } }: PayloadAction<ThemeState>,
    ) => {
      if (!state.theme) {
        if (typeof theme !== 'undefined') {
          state.theme = theme;
        }
        if (typeof darkMode !== 'undefined') {
          state.darkMode = darkMode;
        }
      }
    },
  },
});

export const { changeTheme, setDefaultTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;
export default themeReducer;
