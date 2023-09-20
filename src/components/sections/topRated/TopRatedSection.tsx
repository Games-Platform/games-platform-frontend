import Container from '@/components/container/Container';
import TopRatedCard from '@/components/topRatedCard/TopRatedCard';
import LinkComponent from '@/components/linkComponent/LinkComponent';
import { EnumColors, EnumSizes } from '@/types/Types';
import mocks from './mocks';

import styles from './TopRatedSection.module.scss';

const TopRatedSection = () => (
  <section className={styles.topRated}>
    <Container>
      <div className={styles.topRatedWrapper}>
        <div className={styles.topRatedInfo}>
          <h3 className={styles.topRatedTitle}>Top rated games</h3>

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
