import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import { IError } from '@/src/types/Types';

const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    credentials: 'include',
  }) as BaseQueryFn<string | FetchArgs, unknown, IError>,
  endpoints: () => ({}),
});

export default apiService;
