import { ISelectOption } from '@/types/Types';

const getSelectOptions = () => {
  const options: ISelectOption[] = [
    { value: 'add', label: 'Add game to your account' },
    { value: 'finished', label: 'Finished!' },
    { value: 'playing', label: 'Playing now!' },
    { value: 'later', label: 'Want to play later!' },
    { value: 'remove', label: 'Remove from account' },
  ];

  return options;
};

export default getSelectOptions;
