import { combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './slices';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
