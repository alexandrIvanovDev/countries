import { IoSearchSharp } from 'react-icons/io5';
import cl from './Search.module.scss';
import { ChangeEvent, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../store/services/filter.ts';

type Search = {
  value: string;
  setValue: (value: string) => void;
};

export const Search: FC<Search> = memo(({ value, setValue }) => {
  const dispatch = useDispatch();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    dispatch(changeValue(e.currentTarget.value));
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
      />
    </label>
  );
});
