import { ChangeEvent, FC, memo } from 'react';
import { useDispatch } from 'react-redux';

import { IoMdClose } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { changeValue } from 'store/services/filter.ts';

import cl from './Search.module.scss';

type Search = {
  setValue: (value: string) => void;
  value: string;
};

export const Search: FC<Search> = memo(({ value, setValue }) => {
  const dispatch = useDispatch();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    dispatch(changeValue(newValue));
  };

  const clearInput = () => {
    setValue('');
    dispatch(changeValue(''));
  };

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
          <IoMdClose onClick={clearInput} className={cl.clearIcon} />
        </div>
      )}
    </label>
  );
});
