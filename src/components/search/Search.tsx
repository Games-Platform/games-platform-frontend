import classNames from 'classnames';

import {
  FC,
  Fragment,
  Ref,
  useDeferredValue,
  useEffect,
  useState,
} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Search.module.scss';
import SearchIcon from '@/components/icons/SearchIcon';
import { useGetSearchedQuery } from '@/store/services/search';

import setPlatforms from '@/helpers/setPlatform';

interface SearchProps {
  isSearchOpen: boolean;
  searchInputRef: Ref<HTMLInputElement>;
  setIsSearchOpen: (value: boolean) => void;
}

const Search: FC<SearchProps> = ({
  isSearchOpen,
  searchInputRef,
  setIsSearchOpen,
}) => {
  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(query);

  const navigate = useNavigate();

  const { data } = useGetSearchedQuery({ query: deferredQuery });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleNavigate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsSearchOpen(false);
      navigate('/search');
    }
  };

  useEffect(() => {
    if (!isSearchOpen) {
      setQuery('');
    }
  }, [isSearchOpen]);

  return (
    <div
      className={classNames(styles.searchInputWrapper, {
        [styles.active]: isSearchOpen,
      })}
    >
      <input
        ref={searchInputRef}
        onChange={handleSearch}
        onKeyDown={handleNavigate}
        type="text"
        value={query}
        placeholder="Start type to explore..."
      />

      <div className={styles.inputSearchIcon}>
        <SearchIcon />
      </div>

      <div className={styles['searched-games']}>
        {data &&
          isSearchOpen &&
          data.results.map((game) => (
            <NavLink
              to={`/game/${game.id}`}
              className={styles['searched-game']}
              key={game.id}
            >
              <div className={styles['searched-game-image']}>
                <img
                  src={game.background_image}
                  alt={game.name}
                  loading="lazy"
                />
              </div>

              <div className={styles['searched-game-info']}>
                <h5 className={styles['searched-game-title']}>{game.name}</h5>

                <p className={styles['searched-game-rating']}>
                  <span>rating:</span>
                  {game.rating}
                </p>

                <div className={styles['searched-game-platforms']}>
                  {game.stores &&
                    game.stores.map((platform) => (
                      <Fragment key={platform.store.slug}>
                        {setPlatforms(platform.store.slug)}
                      </Fragment>
                    ))}
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};
export default Search;
