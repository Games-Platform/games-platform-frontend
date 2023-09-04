import { useParams } from 'react-router';
import { useGetSingleGameQuery } from '@/store/services/search';
import GameCoverSection from '@/components/sections/gameCover/GameCoverSection';
import GameInfoSection from '@/components/sections/gameInfo/GameInfoSection';

const SingleGame = () => {
  const { id } = useParams();

  const { data: game, isLoading } = useGetSingleGameQuery({ id });

  return (
    <main>
      <GameCoverSection game={game} isLoading={isLoading} />
      <GameInfoSection game={game} isLoading={isLoading} />
    </main>
  );
};

export default SingleGame;
