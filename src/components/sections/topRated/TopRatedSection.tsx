import { NavLink } from 'react-router-dom';
import mocks from './mocks';
import styles from './TopRatedSection.module.scss';
import Container from '../../container/Container';
import TopRatedCard from '../../topRatedCard/TopRatedCard';

const TopRatedSection = () => (
  <section className={styles.topRated}>
    <Container>
      <div className={styles.topRatedWrapper}>
        <div className={styles.topRatedInfo}>
          <h4 className={styles.topRatedTitle}>Top rated games</h4>
          <NavLink className={styles.topRatedLink} to="/popular">
            SEE ALL
          </NavLink>
        </div>
        <div className={styles.ratedGamesWrapper}>
          {mocks.map(({ id, src, ratings }) => (
            <TopRatedCard key={id} src={src} ratings={ratings} />
          ))}
        </div>
      </div>
    </Container>
  </section>
);
export default TopRatedSection;
