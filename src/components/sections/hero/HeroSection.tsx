import { NavLink } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import Container from '@/components/container/Container';
import heroImage from '@/assets/images/Hero_image.png';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const { isAuth } = useAuth();
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroWrapper}>
          <div className={styles.info}>
            <h5 className={styles.miniTitle}>Explore game world</h5>
            <h2 className={styles.heroTitle}>
              Don’t forget games that you want to play
            </h2>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard.
            </p>
            <NavLink
              to={isAuth ? '/profile' : '/login'}
              className={styles.loginLink}
            >
              {isAuth ? 'Explore' : 'Login'}
            </NavLink>
          </div>
          <div className={styles.image}>
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HeroSection;
