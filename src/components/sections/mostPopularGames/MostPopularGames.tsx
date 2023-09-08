import { useState } from 'react';
import HeadingH2 from '@/components/headingH2/HeadingH2';
import { ECustomInputWidth, TSelectOnChange } from '@/types/Types';
import styles from './MostPopularGames.module.scss';
import CustomSelect from '@/components/customSelect/CustomSelect';
import { filterOptions, platformOptions } from '@/utils/GlobalVars';
import Card from '@/components/card/Card';

const MostPopularGames = () => {
  const [selectedFilterOptions, setSelectedFilterOptions] = useState(
    filterOptions[0],
  );
  const [selectedPlatformOptions, setSelectedPlatformOptions] = useState(
    platformOptions[0],
  );

  return (
    <section className={styles.popularGamesSection}>
      <HeadingH2>Most Popular Games</HeadingH2>

      <div className={styles.selectsWrapper}>
        <CustomSelect
          selectedOption={selectedFilterOptions}
          setSelectedOption={setSelectedFilterOptions as TSelectOnChange}
          options={filterOptions}
          width={ECustomInputWidth.SMALL}
        />

        <CustomSelect
          selectedOption={selectedPlatformOptions}
          setSelectedOption={setSelectedPlatformOptions as TSelectOnChange}
          options={platformOptions}
          width={ECustomInputWidth.SMALL}
        />
      </div>

      <div className={styles.cardList}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default MostPopularGames;
