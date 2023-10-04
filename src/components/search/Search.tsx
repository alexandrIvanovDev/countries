import { IoSearchSharp } from 'react-icons/io5';
import cl from './Search.module.scss';
import { ChangeEvent, FC } from 'react';

type Search = {
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  // searchCountry: () => void
};

export const Search: FC<Search> = ({ value, onChangeValue }) => {
  return (
    <label className={cl.label}>
      <IoSearchSharp />
      <input
        type='text'
        placeholder='Search for a country...'
        className={cl.input}
        value={value}
        onChange={onChangeValue}
      />
    </label>
  );
};
