import NavItemComponent from '@/components/navItemComponent/NavItemComponent';

import styles from '@/components/navList/NavList.module.scss';

const NavList = () => {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Top rated', to: '/' },
    { name: 'Search', to: '/', svgIcon: true },
    { name: 'Log In', to: '/login', linkBtn: true },
  ];

  return (
    <nav>
      <ul className={styles.navList}>
        {navItems.map(({ name, to, svgIcon, linkBtn }) => (
          <NavItemComponent
            key={name}
            to={to}
            svgIcon={svgIcon}
            linkBtn={linkBtn}
          >
            {name}
          </NavItemComponent>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
