import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import commonSlice from './common';
// NOTE:please update the key date when you update any Redux Slice / State
const persistConfig = {
  key: `root-${process.env.REACT_APP_PERSIST_KEY}`,
  version: 1,
  storage: AsyncStorage,
  // whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({ common: commonSlice }));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
