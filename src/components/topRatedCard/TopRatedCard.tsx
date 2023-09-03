import { FC } from 'react';
import styles from './TopRatedCard.module.scss';
import Fire from '../icons/Fire';

interface TopRatedCardProps {
  src: string;
  ratings: number;
}

const TopRatedCard: FC<TopRatedCardProps> = ({ src, ratings }) => (
  <div className={styles.topRatedCard}>
    <div className={styles.image}>
      <img src={src} alt="Ratings" />
    </div>

    <div className={styles.ratings}>
      <Fire /> {ratings} <span>ratings</span>
    </div>
  </div>
);
export default TopRatedCard;
