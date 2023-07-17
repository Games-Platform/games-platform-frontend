import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const apiService = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    credentials: 'include',
  }),
  endpoints: () => ({}),
});

export default apiService;
