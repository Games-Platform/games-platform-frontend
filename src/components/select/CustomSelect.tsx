import Select, { CSSObjectWithLabel, SingleValue } from 'react-select';
import { FC } from 'react';
import { ISelectOption } from '@/types/Types';

interface CustomSelectProps {
  options: ISelectOption[];
  handleSelectChange: (newValue: SingleValue<ISelectOption>) => void;
  selectedOption: SingleValue<ISelectOption>;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  handleSelectChange,
  selectedOption,
}) => {
  const customStyles = {
    option: (
      provided: CSSObjectWithLabel,
      { data }: { data: ISelectOption },
    ) => {
      if (data.value === options.at(-1)?.value) {
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
    <Select
      classNamePrefix="select"
      onChange={handleSelectChange}
      options={options}
      defaultValue={selectedOption}
      styles={customStyles}
    />
  );
};
export default CustomSelect;
