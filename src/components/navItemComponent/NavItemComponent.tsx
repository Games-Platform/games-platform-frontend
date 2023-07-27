import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '@/components/navItemComponent/NavItemComponent.module.scss';

interface INavLink {
  to: string;
  children: string;
}

const NavItemComponent: FC<INavLink> = ({ children, to }) => (
  <li className={styles.navItem}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive && styles.active} ${styles.navLink}`
      }
    >
      {children}
    </NavLink>
  </li>
);
export default NavItemComponent;
