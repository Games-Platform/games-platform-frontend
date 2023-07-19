import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '@/components/icons/Search';
import styles from '@/components/navItemComponent/NavItemComponent.module.scss';

interface INavLink {
  to: string;
  children: string;
  svgIcon?: boolean;
}

const NavItemComponent: FC<INavLink> = ({ children, to, svgIcon = false }) => (
  <li className={styles.navItem}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive && styles.active} ${styles.navLink}`
      }
    >
      {children}

      {svgIcon && (
        <div className={styles.svgIcon}>
          <Search />
        </div>
      )}
    </NavLink>
  </li>
);

NavItemComponent.defaultProps = {
  svgIcon: false,
};

export default NavItemComponent;
