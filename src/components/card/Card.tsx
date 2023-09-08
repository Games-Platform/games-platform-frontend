import gameImg from '@/assets/images/cardPicture.jpg';
import styles from './Card.module.scss';
import Xbox from '@/components/icons/Xbox';
import PS from '@/components/icons/PS';
import Steam from '@/components/icons/Steam';
import EpicGames from '@/components/icons/EpicGames';
import Gog from '@/components/icons/Gog';
import Fire from '@/components/icons/Fire';

const Card = () => {
  console.log(1);
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img src={gameImg} alt="game" className={styles.image} />
      </div>

      <div className={styles.cardContent}>
        <h5 className={styles.cardTitle}>Grand Theft Auto V</h5>

        <div className={styles.platforms}>
          <span>2013</span>

          <div className={styles.platformsList}>
            <Xbox />

            <PS />

            <Steam />

            <EpicGames />

            <Gog />
          </div>
        </div>

        <p className={styles.rating}>
          <Fire /> 40 ratings
        </p>
      </div>
    </div>
  );
};

export default Card;
