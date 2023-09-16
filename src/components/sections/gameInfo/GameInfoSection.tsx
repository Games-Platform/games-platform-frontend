import React, { FC, useCallback, useState } from 'react';
import { SingleValue } from 'react-select';
import Container from '@/components/container/Container';
import CustomSelect from '@/components/customSelect/CustomSelect';
import StarRating from '@/components/starRating/StarRating';
import Button from '@/components/button/Button';
import LinkComponent from '@/components/linkComponent/LinkComponent';
import { singleGameOptions } from '@/utils/GlobalVars';
import useRating from '@/hooks/useRating';
import setPlatforms from '@/helpers/setPlatform';
import {
  ECustomInputWidth,
  EnumColors,
  EnumSizes,
  IGame,
  ISelectField,
} from '@/types/Types';

import styles from './GameInfoSection.module.scss';

interface GameInfoSectionProps {
  game: IGame | undefined;
  isLoading: boolean;
}

const GameInfoSection: FC<GameInfoSectionProps> = ({ game, isLoading }) => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<ISelectField>
  >(singleGameOptions[0]);

  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const handleSelectChange = (newValue: SingleValue<ISelectField>) => {
    setSelectedOption(newValue);
  };

  const handleChangeRatingOpen = useCallback(() => {
    setIsRatingOpen((prev) => !prev);
  }, []);

  const { rating } = useRating(game?.id);

  return (
    <section className={styles['game-info']}>
      <Container>
        <div className={styles['top-wrapper']}>
          <h3 className={styles['game-name']}>{game?.name}</h3>
          <CustomSelect
            setSelectedOption={handleSelectChange}
            options={singleGameOptions}
            selectedOption={selectedOption}
            width={ECustomInputWidth.MEDIUM}
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
              color={EnumColors.BLACK}
              sizes={EnumSizes.MEDIUM}
            >
              Leave comment
            </LinkComponent>
          </div>
          {isRatingOpen && (
            <StarRating onClose={handleChangeRatingOpen} game_id={game?.id} />
          )}
        </>
        <p className={styles['game-description']}>{game?.description_raw}</p>
        <div className={styles['game-ratings']}>
          <div className={styles['game-rating']}>
            Metacritic:
            <span className={styles['game-value']}>{game?.metacritic}</span>
          </div>
          <div className={styles['game-rating']}>
            Games platform:
            <span className={styles['game-value']}>{rating}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GameInfoSection;
