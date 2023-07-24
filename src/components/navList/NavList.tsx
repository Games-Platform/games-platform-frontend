import { NavLink } from 'react-router-dom';

import NavItemComponent from '@/components/navItemComponent/NavItemComponent';
import DropDown from '../dropdown/DropDown';
import styles from '@/components/navList/NavList.module.scss';

import styles from '@/components/navList/NavList.module.scss';

const NavList = () => {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Top rated', to: '/fdfdf' },
    { name: 'Search', to: '/fdfd', svgIcon: true },
  ];

  const isAuth = true;

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map(({ name, to, svgIcon }) => (
          <NavItemComponent key={name} to={to} svgIcon={svgIcon}>
            {name}
          </NavItemComponent>
        ))}
      </ul>

      {isAuth ? (
        <DropDown />
      ) : (
        <NavLink to="/" className={styles.loginLink}>
          Log In
        </NavLink>
      )}
    </nav>
  );
};

export default NavList;
