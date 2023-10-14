import { Search } from '../search/Search.tsx';
import cl from './SearchBlock.module.scss';
import { FC, useEffect, useState } from 'react';
import { Option } from 'src/pages/mainPage';
import Select, { SingleValue } from 'react-select';
import { useAppSelector } from '../../store/store.ts';
import { useDispatch } from 'react-redux';
import { changeOption } from '../../store/services/filter.ts';

type Props = {
  searchCountry: (value: string, region: string) => void;
  options: Array<Option>;
};

export const SearchBlock: FC<Props> = ({ searchCountry, options }) => {
  const { value, option } = useAppSelector((state) => state.filter);

  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState(value);
  const [selectedOption, setSelectedOption] = useState(option);

  const onChangeSelect = (e: SingleValue<Option>) => {
    setSelectedOption(e?.value || '');
    dispatch(changeOption(e?.value || ''));
  };

  useEffect(() => {
    // console.log('mount');
    searchCountry(searchValue, selectedOption);
    // return () => {
    //   console.log('unmount');
    // };
  }, [searchValue, selectedOption, value, option]);

  return (
    <div className={cl.wrapper}>
      <Search value={searchValue} setValue={setSearchValue} />
      <Select
        options={options}
        placeholder='Filter by region'
        onChange={onChangeSelect}
        isClearable
        className={cl.select}
      />
    </div>
  );
};
