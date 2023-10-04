import { SearchBlock } from '../components/search-block/SearchBlock.tsx';
import clContainer from '../components/header/Container.module.scss';
import { useGetAllCountriesQuery } from '../store/srvices/countries.ts';
import { CountryCard } from '../components/country-card/CountryCard.tsx';
import cl from './MainPage.module.scss';

export const MainPage = () => {
  const { data, isLoading } = useGetAllCountriesQuery('all');

  return (
    <div>
      <div className={clContainer.container}>
        <SearchBlock />
        <div className={cl.countries}>
          {isLoading && <div>Loading...</div>}
          {data &&
            data.map((country) => (
              <CountryCard country={country} key={country.name.official} />
            ))}
        </div>
      </div>
    </div>
  );
};
