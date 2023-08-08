import { NavLink } from 'react-router-dom';

import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import NavItemComponent from '@/components/navItemComponent/NavItemComponent';
import DropDown from '../dropdown/DropDown';
import styles from '@/components/navList/NavList.module.scss';
import useAuth from '@/hooks/useAuth';
import SearchIcon from '../icons/SearchIcon';
import Search from '../search/Search';

const NavList = () => {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Top rated', to: '/fdfdf' },
  ];

  const { isAuth } = useAuth();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleOpenSearch = (e: React.MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setIsSearchOpen(true);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleClickOutsideSearch = useCallback((e: MouseEvent) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(e.target as Node)
    ) {
      setIsSearchOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideSearch);

    return () => {
      document.removeEventListener('click', handleClickOutsideSearch);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map(({ name, to }) => (
          <NavItemComponent key={name} to={to}>
            {name}
          </NavItemComponent>
        ))}

        <li
          className={styles.navLink}
          onClick={handleOpenSearch}
          aria-hidden="true"
        >
          Search
          <div className={styles.svgIcon}>
            <SearchIcon />
          </div>
        </li>

        <Search isSearchOpen={isSearchOpen} searchInputRef={searchInputRef} />
      </ul>

      {isAuth ? (
        <DropDown />
      ) : (
        <NavLink to="/login" className={styles.loginLink}>
          Log In
        </NavLink>
      )}
    </nav>
  );
};

export default NavList;
