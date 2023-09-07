import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import { IError } from '@/src/types/Types';

const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_LINK,
    credentials: 'include',
  }) as BaseQueryFn<string | FetchArgs, unknown, IError>,
  endpoints: () => ({}),
});

export default apiService;
