import { ILocalDBGame, ILocalGame, IVoteGame } from '@/types/Types';
import apiService from './api';

export const gamesService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createGame: builder.mutation<ILocalDBGame, ILocalGame>({
      // <ReturnTypes, ArgumentTypes>
      query: (body) => ({
        url: 'games/create',
        method: 'post',
        body,
      }),
    }),
    getRating: builder.query<string, number | undefined>({
      query: (game_id) => ({
        url: `games/rating/${game_id}`,
        method: 'get',
      }),
    }),
    voteForGame: builder.mutation<null, IVoteGame>({
      query: (body) => ({
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
