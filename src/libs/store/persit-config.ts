import type { Storage } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import { localStorage } from 'data/services/local-storage';
import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage: localStorage satisfies Storage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
