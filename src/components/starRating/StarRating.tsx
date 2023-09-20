import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Star from '@/components/icons/Star';
import {
  useCreateUserGameMutation,
  useGetGameRatingQuery,
  useSetGameRatingMutation,
} from '@/store/services/userGames';
import { useVoteForGameMutation } from '@/store/services/games';
import useAuth from '@/hooks/useAuth';
import useRating from '@/hooks/useRating';

import styles from './StarRating.module.scss';

interface StarRatingProps {
  onClose: () => void;
  game: number | undefined;
}

const StarRating: FC<StarRatingProps> = ({ onClose, game }) => {
  const { data, isSuccess, refetch } = useGetGameRatingQuery(game, {
    skip: !game,
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { refetch: gameRatingRefetch } = useRating(game);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const [createUserGame] = useCreateUserGameMutation();
  const [setGameRating] = useSetGameRatingMutation();
  const [voteForGame] = useVoteForGameMutation();

  const handleClick = async (index: number) => {
    if (!isAuth) {
      navigate('/login');
      return;
    }

    setRating(index);

    try {
      if (game) {
        await createUserGame({ game });
      }

      if (isSuccess) {
        await voteForGame({
          game_id: game,
          value: index - data.rating,
          vote: data.rating > 0 ? 0 : 1,
        });
      }

      if (game) {
        await setGameRating({ game, rating: index });
        await gameRatingRefetch();
        await refetch();
      }

      toast.success('Well done! Your voice was accepted');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      onClose();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setRating(data.rating);
    }
  }, [isSuccess]);

  return (
    <div className={styles['star-rating']}>
      {[...Array(5)].map((_, index) => (
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
