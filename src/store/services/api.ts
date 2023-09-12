import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import { IError } from '@/types/Types';

const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_LINK,
    credentials: 'include',
    prepareHeaders: async (headers) => {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, IError>,
  endpoints: () => ({}),
});

export default apiService;
