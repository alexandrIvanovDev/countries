import { IoSearchSharp } from 'react-icons/io5';
import cl from './Search.module.scss';
import { ChangeEvent, FC, KeyboardEvent } from 'react';

type Search = {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  searchCountry: () => void;
};

export const Search: FC<Search> = ({ value, onChangeValue, searchCountry }) => {
  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchCountry();
    }
  };

  return (
    <label className={cl.label}>
      <IoSearchSharp className={cl.icon} />
      <input
        type='text'
        placeholder='Search for a country...'
        className={cl.input}
        value={value}
        onChange={onChangeValue}
        onKeyDown={onEnterHandler}
      />
    </label>
  );
};
