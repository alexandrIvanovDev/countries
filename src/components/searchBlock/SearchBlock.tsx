import { Search } from '../search/Search.tsx';
import cl from './SearchBlock.module.scss';
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/store.ts';
import { useDispatch } from 'react-redux';
import { changeOption, Option } from '../../store/services/filter.ts';
import { Select } from 'src/components/select/Select.tsx';

type Props = {
  searchCountry: (value: string, region: string) => void;
  options: Array<Option>;
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
  }, [searchValue, selectedOption, value, option]);

  return (
    <div className={cl.wrapper}>
      <Search value={searchValue} setValue={setSearchValue} />
      <Select
        options={options}
        onChange={onChangeOption}
        value={selectedOption}
      />
    </div>
  );
};
