import { FC } from 'react';

import { CountryCard } from '@/entities/countryCard';
import { Country, CountryInfo } from '@/shared/types';
import { Loader } from '@/shared/ui/loader';

import cl from './CountriesList.module.scss';

type Props = {
  isLoading: boolean;
  filteredCountries: Array<Country>;
};

export const CountriesList: FC<Props> = ({ filteredCountries, isLoading }) => {
  return (
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
        return <CountryCard key={c.name.official} countryInfo={countryInfo} />;
      })}
    </div>
  );
};
