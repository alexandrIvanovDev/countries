import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Option, changeOption } from 'store/services/filter.ts';
import { useAppSelector } from 'store/store.ts';

import { Search } from 'components/search';
import { Select } from 'components/select/Select.tsx';

import cl from './SearchBlock.module.scss';

type Props = {
  options: Array<Option>;
  searchCountry: (value: string, region: string) => void;
};

export const SearchBlock: FC<Props> = ({ searchCountry, options }) => {
  const { value, option } = useAppSelector((state) => state.filter);

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(value);
  const [selectedOption, setSelectedOption] = useState(option);

  const onChangeOption = (value: string) => {
    setSelectedOption(value);
    dispatch(changeOption(value));
  };

  useEffect(() => {
    searchCountry(searchValue, selectedOption);
  }, [searchValue, selectedOption]);

  return (
    <div className={cl.wrapper}>
      <Search value={searchValue} setValue={setSearchValue} />
      <Select
        options={options}
        value={selectedOption}
        onChange={onChangeOption}
      />
    </div>
  );
};
