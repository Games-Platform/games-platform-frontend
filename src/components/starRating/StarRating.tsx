import { FC, useState } from 'react';
import classNames from 'classnames';
import { toast } from 'react-hot-toast';
import Star from '../icons/Star';

import styles from './StarRating.module.scss';

interface StarRatingProps {
  onClose: () => void;
}

const StarRating: FC<StarRatingProps> = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (index: number) => {
    // TODO Need to get voice from DB
    setRating(index);
    onClose();
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
