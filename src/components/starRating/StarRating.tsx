import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { toast } from 'react-hot-toast';
import {
  useCreateUserGameMutation,
  useGetGameRatingQuery,
  useSetGameRatingMutation,
} from '@/store/services/userGames';
import Star from '../icons/Star';

import styles from './StarRating.module.scss';

interface StarRatingProps {
  onClose: () => void;
  game: number | undefined;
}

const StarRating: FC<StarRatingProps> = ({ onClose, game }) => {
  const {
    data,
    isSuccess: getRatingSuccess,
    refetch,
  } = useGetGameRatingQuery(game, { skip: !game });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [createUserGame] = useCreateUserGameMutation();
  const [setGameRating] = useSetGameRatingMutation();
  const handleClick = async (index: number) => {
    // TODO Need to get voice from DB
    setRating(index);
    if (game) {
      await createUserGame({ game });
    }
    onClose();
    toast.success('Well done! Your voice was accepted');
  };

  useEffect(() => {
    if (getRatingSuccess) {
      setRating(data.rating);
    }
  }, [getRatingSuccess]);

  useEffect(() => {
    if (game && rating) {
      setGameRating({ game, rating });
      refetch();
    }
  }, [rating]);

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
