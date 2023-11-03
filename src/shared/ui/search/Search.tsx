import { ChangeEvent, FC } from 'react';

import { IoMdClose } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

import cl from './Search.module.scss';

type Search = {
  value: string;
  clearValue: () => void;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Search: FC<Search> = (props) => {
  const { value, clearValue, onChangeValue } = props;

  return (
    <label className={cl.label}>
      <IoSearchSharp className={cl.searchIcon} />
      <input
        type='text'
        value={value}
        className={cl.input}
        onChange={onChangeValue}
        placeholder='Search for a country...'
      />
      {value && (
        <div className={cl.clearIconWrapper}>
          <IoMdClose onClick={clearValue} className={cl.clearIcon} />
        </div>
      )}
    </label>
  );
};
