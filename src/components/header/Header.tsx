import { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Container from '@/components/container/Container';
import NavList from '@/components/navList/NavList';
import SearchIcon from '@/components/icons/SearchIcon';
import Search from '@/components/search/Search';
import useAuth from '@/hooks/useAuth';
import DropDown from '@/components/dropdown/DropDown';
import styles from '@/components/header/Header.module.scss';

const Header = () => {
  const { isAuth } = useAuth();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleOpenSearch = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            <NavLink to="/">Games Platform</NavLink>
          </h1>

          <div className={styles.navBlock}>
            <NavList />

            <div
              className={styles.navLink}
              onClick={handleOpenSearch}
              aria-hidden="true"
            >
              Search
              <div className={styles.svgIcon}>
                <SearchIcon />
              </div>
            </div>

            <Search
              isSearchOpen={isSearchOpen}
              searchInputRef={searchInputRef}
              setIsSearchOpen={setIsSearchOpen}
            />
          </div>

          {isAuth ? (
            <DropDown />
          ) : (
            <NavLink to="/login" className={styles.loginLink}>
              Log In
            </NavLink>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
