import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import { IError, IGames, ISearchParams } from '@/types/Types';

export const searchService = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: `https://api.rawg.io/api/games?key=${
    //   import.meta.env.VITE_API_KEY
    // }`,
    mode: 'cors',
  }) as BaseQueryFn<string | FetchArgs, unknown, IError>,
  reducerPath: 'searchService',
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    getSearched: builder.query<IGames, ISearchParams>({
      query: (body: ISearchParams) => ({
        url: body.query
          ? `https://api.rawg.io/api/games?key=${
              import.meta.env.VITE_API_KEY
            }&search=${body.query}&ordering=-added`
          : '',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSearchedQuery } = searchService;
