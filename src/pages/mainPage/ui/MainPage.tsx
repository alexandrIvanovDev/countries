import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CountriesList } from '@/entities/countriesList';
import { SearchCountry } from '@/features/searchCountry';
import { useAppSelector } from '@/shared/lib';
import { Country } from '@/shared/types';

import { useGetAllCountriesQuery } from '../api/getAllCountries.ts';

export const MainPage = () => {
  const { data, isLoading } = useGetAllCountriesQuery(null);
  const { value, option } = useAppSelector((state) => state.filter);

  const location = useLocation();

  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>([]);

  const searchCountry = (title: string, region: string) => {
    if (!data) return;
    let countriesData = [...data];
    if (region) {
      countriesData = countriesData.filter((c) => c.region.includes(region));
    }
    if (title) {
      countriesData = countriesData.filter((c) =>
        c.name.common.toLowerCase().includes(title.toLowerCase())
      );
    }
    setFilteredCountries([...countriesData]);
  };

  useEffect(() => {
    if (data) {
      setFilteredCountries([...data]);
    }
    if (location.pathname === '/') {
      searchCountry(value, option);
    }
  }, [data]);

  return (
    <div>
      <SearchCountry searchCountry={searchCountry} />
      <CountriesList isLoading={isLoading} filteredCountries={filteredCountries} />
    </div>
  );
};
