import { ILocalGame, IVoteGame } from '@/types/Types';
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
    getRating: builder.query({
      query: (game_id: number | undefined) => ({
        url: `games/rating/${game_id}`,
        method: 'get',
      }),
    }),
    voteForGame: builder.mutation({
      query: (body: IVoteGame) => ({
        url: 'games/vote',
        method: 'post',
        body,
      }),
    }),
  }),
});

export const {
  useCreateGameMutation,
  useVoteForGameMutation,
  useGetRatingQuery,
} = gamesService;
