import NavItemComponent from '@/components/navItemComponent/NavItemComponent';
import styles from '@/components/navList/NavList.module.scss';
import { navItems } from '@/utils/GlobalVars';

const NavList = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      {navItems.map(({ name, to }) => (
        <NavItemComponent key={name} to={to}>
          {name}
        </NavItemComponent>
      ))}
    </ul>
  </nav>
);

export default NavList;
