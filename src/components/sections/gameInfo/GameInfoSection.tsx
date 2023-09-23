import React, { FC, useCallback, useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { useNavigate } from 'react-router';
import Container from '@/components/container/Container';
import CustomSelect from '@/components/customSelect/CustomSelect';
import StarRating from '@/components/starRating/StarRating';
import Button from '@/components/button/Button';
import LinkComponent from '@/components/linkComponent/LinkComponent';
import {
  useCreateUserGameMutation,
  useGetGameStatusQuery,
  useSetGameStatusMutation,
} from '@/store/services/userGames';
import useRating from '@/hooks/useRating';
import useAuth from '@/hooks/useAuth';
import setPlatforms from '@/helpers/setPlatform';
import { singleGameOptions } from '@/utils/GlobalVars';
import {
  ECustomInputWidth,
  EGameStatus,
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
  >(singleGameOptions[EGameStatus.NOT_ADDED]);
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const { rating } = useRating(game?.id);

  const { data: gameStatus, isSuccess: gameStatusIsSuccess } =
    useGetGameStatusQuery(game?.id, {
      skip: !game?.id || !isAuth,
    });
  const [setGameStatus] = useSetGameStatusMutation();
  const [createUserGame] = useCreateUserGameMutation();

  const handleSelectChange = (newValue: SingleValue<ISelectField>) => {
    if (!isAuth) {
      navigate('/login');
      return;
    }

    setSelectedOption(newValue);

    if (game && gameStatus && !gameStatus?.status) {
      createUserGame({ game: game.id });
    }

    if (game && newValue) {
      setGameStatus({ game: game.id, status: Number(newValue.value) });
    }

    if (newValue?.value === EGameStatus.REMOVE && game) {
      setGameStatus({ game: game.id, status: 0 });
      setSelectedOption(singleGameOptions[EGameStatus.NOT_ADDED]);
    }
  };

  const handleChangeRatingOpen = useCallback(() => {
    setIsRatingOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (gameStatusIsSuccess) {
      setSelectedOption(singleGameOptions[gameStatus.status]);
    }
  }, [gameStatusIsSuccess]);

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
            <StarRating onClose={handleChangeRatingOpen} game={game?.id} />
          )}
        </>
        <p className={styles['game-description']}>{game?.description_raw}</p>
        <div className={styles['game-ratings']}>
          <div className={styles['game-rating']}>
            Metacritic:
            <span className={styles['game-value']}>
              {game?.metacritic || 0}
            </span>
          </div>
          <div className={styles['game-rating']}>
            Games platform:
            <span className={styles['game-value']}>{rating || 0}</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GameInfoSection;
