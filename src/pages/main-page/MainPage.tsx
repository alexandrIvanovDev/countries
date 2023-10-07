import { SearchBlock } from '../../components/search-block/SearchBlock.tsx';
import { useGetAllCountriesQuery } from '../../store/srvices/countries.ts';
import { CountryCard } from '../../components/country-card/CountryCard.tsx';
import cl from './MainPage.module.scss';
import { Loader } from '../../components/loader/Loader.tsx';
import { CountryInfo } from '../../store/types/types.ts';

export const MainPage = () => {
  const { data, isLoading } = useGetAllCountriesQuery('');

  return (
    <div>
      <SearchBlock />
      <div className={cl.countries}>
        {isLoading && <Loader />}
        {data &&
          data.map((c) => {
            const countryInfo: CountryInfo = {
              name: c.name,
              flags: c.flags,
              info: [
                {
                  title: 'Population',
                  description: c.population,
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
