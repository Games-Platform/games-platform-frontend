import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Search from '@/components/icons/Search';
import styles from '@/components/navItemComponent/NavItemComponent.module.scss';

interface INavLink {
  to: string;
  children: string;
  svgIcon?: boolean;
  linkBtn?: boolean;
}

const NavItemComponent: FC<INavLink> = ({
  children,
  to,
  svgIcon = false,
  linkBtn = false,
}) => (
  <li className={classNames(styles.navItem, linkBtn && styles.btnLink)}>
    <NavLink to={to} className={classNames(styles.navLink)}>
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
  linkBtn: false,
};

export default NavItemComponent;
