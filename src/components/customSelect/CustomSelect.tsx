import Select, {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
} from 'react-select';
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
    control: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<ISelectField, false, GroupBase<ISelectField>>,
    ) => ({
      ...baseStyles,
      borderColor: state.isFocused ? '#fff' : '#fff',
      backgroundColor: '#212121',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#727272',
      },
      '&:focus': {
        boxShadow: 'none',
      },
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
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={styles}
    />
  );
};
export default CustomSelect;
