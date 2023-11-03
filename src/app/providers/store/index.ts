import { filterSlice } from '@/features/searchCountry/model';
import { themeSlice } from '@/features/themeSwitcher/model';
import { countriesApi } from '@/shared/api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [countriesApi.reducerPath]: countriesApi.reducer,
  filter: filterSlice.reducer,
  theme: themeSlice.reducer,
});

const persistConfig = {
  key: 'countries',
  storage,
  blacklist: ['countriesApi'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
