import { IoSearchSharp } from 'react-icons/io5';
import cl from './Search.module.scss';
import { ChangeEvent, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeValue } from '../../store/services/filter.ts';
import { IoMdClose } from 'react-icons/io';

type Search = {
  value: string;
  setValue: (value: string) => void;
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
      <IoSearchSharp className={cl.icon} />
      <input
        type='text'
        placeholder='Search for a country...'
        className={cl.input}
        value={value}
        onChange={onChangeValue}
      />
      <IoMdClose className={cl.close} onClick={clearInput} />
    </label>
  );
});
