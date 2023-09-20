import { IUserGame } from '@/types/Types';
import apiService from './api';

export const userGamesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createUserGame: builder.mutation({
      query: (body: IUserGame) => ({
        url: 'user-game/create',
        method: 'POST',
        body,
      }),
    }),
    setGameRating: builder.mutation({
      query: (body: IUserGame) => ({
        url: 'user-game/set-rating',
        method: 'PATCH',
        body,
      }),
    }),
    setGameStatus: builder.mutation({
      query: (body: IUserGame) => ({
        url: 'user-game/set-status',
        method: 'PATCH',
        body,
      }),
    }),
    getGameRating: builder.query({
      query: (gameId: number | undefined) => ({
        url: `user-game/get-rating/${gameId && gameId}`,
        method: 'GET',
      }),
    }),
    getGameStatus: builder.query({
      query: (gameId: number) => ({
        url: `user-game/get-status/${gameId}`,
        method: 'GET',
      }),
    }),
    getUserGames: builder.query({
      query: () => ({
        url: 'user-game/get-user-games',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateUserGameMutation,
  useSetGameRatingMutation,
  useSetGameStatusMutation,
  useGetGameRatingQuery,
  useGetGameStatusQuery,
  useGetUserGamesQuery,
} = userGamesService;
