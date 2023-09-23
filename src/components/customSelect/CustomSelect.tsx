import Select, { CSSObjectWithLabel } from 'react-select';
import { FC } from 'react';
import {
  ECustomInputWidth,
  ISelectField,
  TSelectOnChange,
} from '@/types/Types';

interface IProps {
  options: ISelectField[];
  selectedOption: ISelectField | null;
  width: ECustomInputWidth;
  setSelectedOption: TSelectOnChange;
}

const CustomSelect: FC<IProps> = ({
  options,
  selectedOption,
  width,
  setSelectedOption,
}) => {
  const styles = {
    container: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      width,
      fontSize: '14px',
    }),
    control: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      borderColor: '#727272',
      backgroundColor: '#212121',
      cursor: 'pointer',
      transition: '0.3s ease',
      '&:hover': {
        backgroundColor: '#727272',
      },
      '&:focus': {
        boxShadow: 'none',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    option: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      backgroundColor: '#212121',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#727272',
      },
    }),
    menu: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      backgroundColor: '#212121',
      borderRadius: '5px',
    }),
    singleValue: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      color: '#fff',
    }),
    indicatorsContainer: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      '& svg': {
        fill: '#fff',
      },
    }),
  };

  return (
    <Select
      onChange={setSelectedOption}
      options={options}
      styles={styles}
      isSearchable={false}
      value={selectedOption}
    />
  );
};
export default CustomSelect;
