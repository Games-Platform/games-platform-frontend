import classNames from 'classnames';

import { FC, Ref, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Search.module.scss';
import SearchIcon from '@/components/icons/SearchIcon';
import { useGetSearchedQuery } from '@/store/services/search';
import Steam from '../icons/Steam';
import PS from '../icons/PS';
import Xbox from '../icons/Xbox';
import EpicGames from '../icons/EpicGames';
import Gog from '../icons/Gog';

interface SearchProps {
  isSearchOpen: boolean;
  searchInputRef: Ref<HTMLInputElement>;
}

const Search: FC<SearchProps> = ({ isSearchOpen, searchInputRef }) => {
  const [query, setQuery] = useState<string>('');

  const { data, refetch, isLoading, isSuccess } = useGetSearchedQuery({
    query,
  });

  console.log(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const setPlatforms = (platform: string) => {
    switch (platform) {
      case 'steam':
        return <Steam />;
      case 'playstation-store':
        return <PS />;
      case 'xbox-store':
        return <Xbox />;
      case 'epic-games':
        return <EpicGames />;
      case 'gog':
        return <Gog />;
      default:
        return null;
    }
  };
  return (
    <li
      className={classNames(styles.searchInputWrapper, {
        [styles.active]: isSearchOpen,
      })}
    >
      <input
        ref={searchInputRef}
        onChange={handleSearch}
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
            >
              <div className={styles['searched-game-image']}>
                <img src={game.background_image} alt={game.name} />
              </div>
              <div className={styles['searched-game-info']}>
                <h5 className={styles['searched-game-title']}>{game.name}</h5>
                <p className={styles['searched-game-rating']}>
                  <span>rating:</span>
                  {game.rating}
                </p>
                <div className={styles['searched-game-platforms']}>
                  {game.stores &&
                    game.stores.map((platform) =>
                      setPlatforms(platform.store.slug),
                    )}
                </div>
              </div>
            </NavLink>
          ))}
      </div>
    </li>
  );
};
export default Search;
