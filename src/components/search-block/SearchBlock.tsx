import { Search } from '../search/Search.tsx';
import { Select } from '../select/Select.tsx';
import cl from './SearchBlock.module.scss';
import { ChangeEvent, useState } from 'react';

export const SearchBlock = () => {
  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const searchCountry = () => {};

  return (
    <div className={cl.wrapper}>
      <Search
        value={value}
        onChangeValue={onChangeValue}
        searchCountry={searchCountry}
      />
      <Select />
    </div>
  );
};
