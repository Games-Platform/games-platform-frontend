import { NavLink } from 'react-router-dom';
import styles from './HeroSection.module.scss';
import heroImage from '@/assets/images/Hero_image.png';
import Container from '../../container/Container';

const HeroSection = () => (
  <section className={styles.hero}>
    <Container>
      <div className={styles.heroWrapper}>
        <div className={styles.info}>
          <h5 className={styles.minititle}>Explore game world</h5>
          <h2 className={styles.heroTitle}>
            Don’t forget games that you want to play
          </h2>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </p>
          <NavLink to="/login" className={styles.loginLink}>
            Login
          </NavLink>
        </div>
        <div className={styles.image}>
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </Container>
  </section>
);
export default HeroSection;
