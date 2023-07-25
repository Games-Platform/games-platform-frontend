import Container from '../container/Container';
import GitHub from '../icons/GitHub';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles['footer-wrapper']}>
        <div className={styles.copyright}>Copyright ® 2023 Developed by </div>
        <div className={styles.pavlo}>
          <a href="https://github.com/stclamp">
            Pavlo Yevtushenko
            <GitHub />
          </a>
        </div>
        <div className={styles.anton}>
          <a href="https://github.com/Anton-Liada">
            Anton Liada
            <GitHub />
          </a>
        </div>
      </div>
    </Container>
  </footer>
);
export default Footer;
