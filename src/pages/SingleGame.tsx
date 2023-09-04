import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetSingleGameQuery } from '@/store/services/search';
import GameCoverSection from '@/components/sections/gameCover/GameCoverSection';
import GameInfoSection from '@/components/sections/gameInfo/GameInfoSection';
import { useCreateGameMutation } from '../store/services/games';

const SingleGame = () => {
  const { id } = useParams();

  const { data: game, isLoading, isSuccess } = useGetSingleGameQuery({ id });

  const [createGame] = useCreateGameMutation();

  useEffect(() => {
    if (isSuccess && game) {
      const gameToCreate = {
        game_id: String(game.id),
        background_image: game.background_image,
        metacritic: game.metacritic,
        name: game.name,
        games_platform_rating: 0,
      };

      createGame(gameToCreate);
    }
  }, [isSuccess, game]);

  return (
    <main>
      <GameCoverSection game={game} isLoading={isLoading} />
      <GameInfoSection game={game} isLoading={isLoading} />
    </main>
  );
};

export default SingleGame;
