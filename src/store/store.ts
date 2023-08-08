import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import apiService from '@/store/services/api';
import { searchService } from './services/search';

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    [searchService.reducerPath]: searchService.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiService.middleware,
      searchService.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
