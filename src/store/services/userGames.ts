import { IMessage, IUserDBGame, IUserGame } from '@/types/Types';
import apiService from './api';

export const userGamesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createUserGame: builder.mutation<IUserDBGame, IUserGame>({
      // <ReturnTypes, ArgumentTypes>
      query: (body) => ({
        url: 'user-game/create',
        method: 'POST',
        body,
      }),
    }),
    setGameRating: builder.mutation<IMessage, IUserGame>({
      query: (body) => ({
        url: 'user-game/set-rating',
        method: 'PATCH',
        body,
      }),
    }),
    setGameStatus: builder.mutation<IMessage, IUserGame>({
      query: (body) => ({
        url: 'user-game/set-status',
        method: 'PATCH',
        body,
      }),
    }),
    getGameRating: builder.query<{ rating: number }, number | undefined>({
      query: (gameId) => ({
        url: `user-game/get-rating/${gameId}`,
        method: 'GET',
      }),
    }),
    getGameStatus: builder.query<{ status: number }, number | undefined>({
      query: (gameId) => ({
        url: `user-game/get-status/${gameId}`,
        method: 'GET',
      }),
    }),
    getUserGames: builder.query<IUserGame[], null>({
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
