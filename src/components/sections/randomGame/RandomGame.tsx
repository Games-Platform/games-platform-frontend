import Container from '@/components/container/Container';
import randomImg from '@/assets/images/random-mock.png';
import styles from './RandomGame.module.scss';
import { EnumColors, EnumSizes } from '@/types/Types';
import LinkComponent from '@/components/linkComponent/LinkComponent';

const RandomGame = () => (
  <section className={styles['random-wrapper']}>
    <Container>
      <h3 className={styles['random-title']}>Random game every day</h3>

      <h4 className={styles['random-subtitle']}>Lorem Ipsum</h4>

      <p className={styles['random-description']}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s,
      </p>

      <img className={styles['random-image']} src={randomImg} alt="Random" />

      <div className={styles['random-btn']}>
        <LinkComponent
          to="/"
          color={EnumColors.ORANGE}
          sizes={EnumSizes.MEDIUM}
        >
          Learn more
        </LinkComponent>
      </div>
    </Container>
  </section>
);
export default RandomGame;
