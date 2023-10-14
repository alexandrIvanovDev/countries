import { SearchBlock } from 'src/components/searchBlock';
import { useGetAllCountriesQuery } from '../../store/services/countries.ts';
import { CountryCard } from 'src/components/countryCard';
import cl from './MainPage.module.scss';
import { Loader } from 'src/components/loader';
import { Country, CountryInfo } from '../../store/types/types.ts';
import { useEffect, useState } from 'react';

export type Option = {
  value: string;
  label: string;
};

const options: Array<Option> = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

export const MainPage = () => {
  const { data, isLoading } = useGetAllCountriesQuery(null);

  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>(
    []
  );

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
  }, [data]);

  return (
    <div>
      <SearchBlock searchCountry={searchCountry} options={options} />
      <div className={cl.countries}>
        {isLoading && <Loader />}
        {filteredCountries.map((c) => {
          const countryInfo: CountryInfo = {
            name: c.name,
            flags: c.flags,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString('en-US'),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };
          return (
            <CountryCard countryInfo={countryInfo} key={c.name.official} />
          );
        })}
      </div>
    </div>
  );
};
