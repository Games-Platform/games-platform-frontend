import { NavLink } from 'react-router-dom';
import mocks from './mocks';
import styles from './TopRatedSection.module.scss';
import Container from '../../container/Container';
import TopRatedCard from '../../topRatedCard/TopRatedCard';
import LinkComponent from '../../linkComponent/LinkComponent';
import { EnumColors, EnumSizes } from '@/types/Types';

const TopRatedSection = () => (
  <section className={styles.topRated}>
    <Container>
      <div className={styles.topRatedWrapper}>
        <div className={styles.topRatedInfo}>
          <h3 className={styles.topRatedTitle}>Top rated games</h3>

          {/* <NavLink className={styles.topRatedLink} to="/popular">
            SEE ALL
          </NavLink> */}

          <LinkComponent
            to="/popular"
            sizes={EnumSizes.SMALL}
            color={EnumColors.BLACK}
          >
            SEE ALL
          </LinkComponent>
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
