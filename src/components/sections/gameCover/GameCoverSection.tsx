import { FC } from 'react';
import styles from './GameCoverSection.module.scss';
import { IGame } from '@/types/Types';

interface GameCoverSectionProps {
  game: IGame | undefined;
  isLoading: boolean;
}

const GameCoverSection: FC<GameCoverSectionProps> = ({ game, isLoading }) => (
  <section className={styles['game-cover']}>
    {!isLoading && <img src={game?.background_image} alt={game?.name} />}
  </section>
);

export default GameCoverSection;
