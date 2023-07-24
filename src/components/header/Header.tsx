import Container from '../container/Container';
import NavList from '@/components/navList/NavList';
import styles from '@/components/header/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Games Platform</h1>

        <div className={styles.headerRight}>
          <NavList />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;
