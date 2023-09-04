import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
import {
  IError,
  IGame,
  IGames,
  IGetSingleGame,
  ISearchParams,
} from '@/types/Types';

export const searchService = createApi({
  baseQuery: fetchBaseQuery({
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
    getSingleGame: builder.query<IGame, IGetSingleGame>({
      query: (body: IGetSingleGame) => ({
        url: `https://api.rawg.io/api/games/${body.id}?key=${
          import.meta.env.VITE_API_KEY
        }`,
      }),
    }),
  }),
});

export const { useGetSearchedQuery, useGetSingleGameQuery } = searchService;
