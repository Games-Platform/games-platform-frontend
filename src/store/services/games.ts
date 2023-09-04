import { ILocalGame } from '@/types/Types';
import apiService from './api';

export const gamesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createGame: builder.mutation({
      query: (body: ILocalGame) => ({
        url: 'games/create',
        method: 'post',
        body,
      }),
    }),
  }),
});

export const { useCreateGameMutation } = gamesService;
