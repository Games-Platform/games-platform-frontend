import { FC, useState } from 'react';
import Select, { CSSObjectWithLabel, SingleValue } from 'react-select';
import { IGame } from '@/types/Types';
import Container from '@/components/container/Container';

import styles from './GameInfoSection.module.scss';

interface GameInfoSectionProps {
  game: IGame | undefined;
  isLoading: boolean;
}

const options = [
  { value: 'add', label: 'Add game to your account' },
  { value: 'finished', label: 'Finished!' },
  { value: 'playing', label: 'Playing now!' },
  { value: 'later', label: 'Want to play later!' },
  { value: 'remove', label: 'Remove from account' },
];

const GameInfoSection: FC<GameInfoSectionProps> = ({ game, isLoading }) => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<{ value: string; label: string }>
  >(options[0]);

  const handleSelectChange = (
    newValue: SingleValue<{ value: string; label: string }>,
  ) => {
    setSelectedOption(newValue);
  };

  const customStyles = {
    option: (
      provided: CSSObjectWithLabel,
      { data }: { data: { value: string; label: string } },
    ) => {
      if (data.value === options[options.length - 1].value) {
        return {
          ...provided,
          color: '#9f0000 !important',
          cursor: 'pointer',
        };
      }

      return { ...provided, cursor: 'pointer' };
    },
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      cursor: 'pointer',
    }),
  };

  return (
    <section className={styles['game-info']}>
      <Container>
        <div className={styles['top-wrapper']}>
          <h3 className={styles['game-name']}>{game?.name}</h3>
          <Select
            classNamePrefix="select"
            onChange={handleSelectChange}
            options={options}
            defaultValue={selectedOption}
            styles={customStyles}
          />
        </div>
      </Container>
    </section>
  );
};

export default GameInfoSection;
