import React, { FC, useCallback, useState } from 'react';
import { SingleValue } from 'react-select';
import Container from '@/components/container/Container';
import CustomSelect from '@/components/select/CustomSelect';
import setPlatforms from '@/helpers/setPlatform';
import getSelectOptions from '@/helpers/getSelectOptions';
import { EnumColors, EnumSizes, IGame, ISelectOption } from '@/types/Types';

import styles from './GameInfoSection.module.scss';
import StarRating from '@/components/starRating/StarRating';
import Button from '@/components/button/Button';
import LinkComponent from '@/components/linkComponent/LinkComponent';

interface GameInfoSectionProps {
  game: IGame | undefined;
  isLoading: boolean;
}

const GameInfoSection: FC<GameInfoSectionProps> = ({ game, isLoading }) => {
  const options = getSelectOptions();
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<ISelectOption>
  >(options[0]);

  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const handleSelectChange = (newValue: SingleValue<ISelectOption>) => {
    setSelectedOption(newValue);
  };

  const handleChangeRatingOpen = useCallback(() => {
    setIsRatingOpen((prev) => !prev);
  }, []);

  return (
    <section className={styles['game-info']}>
      <Container>
        <div className={styles['top-wrapper']}>
          <h3 className={styles['game-name']}>{game?.name}</h3>
          <CustomSelect
            handleSelectChange={handleSelectChange}
            options={options}
            selectedOption={selectedOption}
          />
        </div>
        <div className={styles['game-platforms']}>
          {game?.stores &&
            game?.stores.map((platform) => (
              <React.Fragment key={platform.store.slug}>
                {setPlatforms(platform.store.slug)}
              </React.Fragment>
            ))}
        </div>
        <>
          <div className={styles['game-buttons']}>
            <Button
              type="button"
              size={EnumSizes.MEDIUM}
              onClick={handleChangeRatingOpen}
            >
              Rate this game
            </Button>
            <LinkComponent
              to="#comments"
              color={EnumColors.WHITE}
              sizes={EnumSizes.MEDIUM}
            >
              Leave comment
            </LinkComponent>
          </div>
          {isRatingOpen && <StarRating onClose={handleChangeRatingOpen} />}
        </>
        <p className={styles['game-description']}>{game?.description_raw}</p>
        <div className={styles['game-ratings']}>
          <div className={styles['game-rating']}>
            Metacritic:
            <span className={styles['game-value']}>{game?.metacritic}</span>
          </div>
          <div className={styles['game-rating']}>
            Games platform:
            <span className={styles['game-value']}>0</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GameInfoSection;
