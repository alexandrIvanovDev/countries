import { Search } from '../search/Search.tsx';
import cl from './SearchBlock.module.scss';
import { FC, useEffect, useState } from 'react';
import { Option } from '../../pages/main-page/MainPage.tsx';
import Select, { SingleValue } from 'react-select';

type Props = {
  searchCountry: (value: string, region: string) => void;
  options: Array<Option>;
};

export const SearchBlock: FC<Props> = ({ searchCountry, options }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const onChangeSelect = (e: SingleValue<Option>) => {
    setSelectedOption(e?.value || '');
  };

  useEffect(() => {
    searchCountry(searchValue, selectedOption);
  }, [searchValue, selectedOption]);

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
