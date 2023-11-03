import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/lib';
import { Search } from '@/shared/ui/search';
import { Select } from '@/shared/ui/select';

import { Option, changeOption, changeValue } from '../model';

import cl from './SearchCountry.module.scss';

const options: Array<Option> = [
  { value: 'all', label: 'All' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

type Props = {
  searchCountry: (value: string, region: string) => void;
};

export const SearchCountry: FC<Props> = ({ searchCountry }) => {
  const { value, option } = useAppSelector((state) => state.filter);

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(value);
  const [selectedOption, setSelectedOption] = useState(option);

  const onChangeOption = (value: string) => {
    setSelectedOption(value);
    dispatch(changeOption(value));
  };

  const onValueChange = (value: string) => {
    if (value === 'all') {
      onChangeOption('');
    } else {
      onChangeOption(value);
    }
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearchValue(newValue);
    dispatch(changeValue(newValue));
  };

  const clearValue = () => {
    setSearchValue('');
    dispatch(changeValue(''));
  };

  useEffect(() => {
    searchCountry(searchValue, selectedOption);
  }, [searchValue, selectedOption]);

  return (
    <div className={cl.wrapper}>
      <Search value={searchValue} clearValue={clearValue} onChangeValue={onChangeValue} />
      <Select options={options} value={selectedOption} onValueChange={onValueChange} />
    </div>
  );
};
