import { NavLink } from 'react-router-dom';
import styles from '@/components/header/Header.module.scss';
import NavList from '@/components/navList/NavList';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <NavLink to="/">Games Platform</NavLink>
    </h1>

    <div className={styles.headerRight}>
      <NavList />
    </div>
  </header>
);

export default Header;
