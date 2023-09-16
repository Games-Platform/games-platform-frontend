import { FC, useState } from 'react';
import { toast } from 'react-hot-toast';
import classNames from 'classnames';
import { useVoteForGameMutation } from '@/store/services/games';
import Star from '@/components/icons/Star';

import styles from './StarRating.module.scss';

interface StarRatingProps {
  onClose: () => void;
  game_id: number | undefined;
}

const StarRating: FC<StarRatingProps> = ({ onClose, game_id }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [voteForGame] = useVoteForGameMutation();
  const handleClick = (index: number) => {
    setRating(index);
    onClose();
    voteForGame({ game_id, value: index });

    toast.success('Well done! Your voice was accepted');
  };
  return (
    <div className={styles['star-rating']}>
      {[...Array(5)].map((star, index) => (
        <button
          type="button"
          key={Math.random()}
          className={classNames(styles['rating-btn'], {
            [styles.on]: index + 1 <= (rating || hover),
            [styles.off]: index + 1 > (rating || hover),
          })}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(rating)}
          onClick={() => handleClick(index + 1)}
        >
          <Star />
        </button>
      ))}
    </div>
  );
};
export default StarRating;
