import Container from '../container/Container';
import GitHub from '../icons/GitHub';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles['footer-wrapper']}>
        <div className={styles.copyright}>Copyright ® 2023 Developed by </div>
        <div className={styles.pavlo}>
          <a target="_blank" href="https://github.com/stclamp" rel="noreferrer">
            Pavlo Yevtushenko
            <GitHub />
          </a>
        </div>
        <div className={styles.anton}>
          <a
            target="_blank"
            href="https://github.com/Anton-Liada"
            rel="noreferrer"
          >
            Anton Liada
            <GitHub />
          </a>
        </div>
      </div>
    </Container>
  </footer>
);
export default Footer;
