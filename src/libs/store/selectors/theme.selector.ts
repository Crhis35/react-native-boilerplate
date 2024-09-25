import { createSelector } from 'reselect';
import type { RootState } from '../store';

const selectTheme = (state: RootState) => state.theme;

export const selectCurrentTheme = createSelector(
  [selectTheme],
  state => state.theme,
);
