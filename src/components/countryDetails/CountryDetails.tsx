import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useGetCountryBorderQuery } from 'store/services/countries.ts';
import { Country, InfoType } from 'store/types/types.ts';

import { Button } from 'components/button';
import { Loader } from 'components/loader';
import { getCurrencies } from 'utils/getCurrencies.ts';
import { getLanguages } from 'utils/getLanguages.ts';
import { getNativeName } from 'utils/getNativeName.ts';

import cl from './CountryDetails.module.scss';

type Props = {
  country: Country;
};

export const CountryDetails: FC<Props> = ({ country }) => {
  const navigate = useNavigate();

  const [currencies, setCurrencies] = useState<Array<string>>([]);
  const [languages, setLanguages] = useState<Array<string>>([]);
  const [nativeName, setNativeName] = useState<Array<string>>([]);

  const borders: Array<string> = country?.borders?.map((b) => b);

  const { data, isLoading } = useGetCountryBorderQuery(borders, {
    skip: !borders,
  });

  useEffect(() => {
    setCurrencies(getCurrencies(country.currencies));
    setLanguages(getLanguages(country.languages));
    setNativeName(getNativeName(country.name.nativeName));
  }, []);

  const info: InfoType[] = [
    { title: 'Native Name', description: nativeName.join(', ') },
    {
      title: 'Population',
      description: country.population.toLocaleString('en-US'),
    },
    { title: 'Region', description: country.region },
    { title: 'Subregion', description: country.subregion },
    { title: 'Capital', description: country.capital },
  ];

  const extraInfo: InfoType[] = [
    { title: 'Top Level Domain', description: country.tld?.join(', ') },
    { title: 'Currencies', description: currencies.join(', ') },
    { title: 'Languages', description: languages.join(', ') },
  ];

  return (
    <div>
      {isLoading && <Loader />}
      {country && (
        <div className={cl.wrapper}>
          <div className={cl.btnBack}>
            <Button withIcon onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
          <div className={cl.country}>
            <img
              className={cl.flag}
              alt={country.flags.alt}
              src={country.flags.svg}
            />
            <div className={cl.countryInformation}>
              <h2 className={cl.title}>{country.name.official}</h2>
              <div className={cl.lists}>
                <ul className={cl.list}>
                  {info.map((info) => (
                    <li key={info.title} className={cl.listItem}>
                      {info.title}:<span> {info.description}</span>
                    </li>
                  ))}
                </ul>
                <ul className={cl.list}>
                  {extraInfo.map((info) => (
                    <li key={info.title} className={cl.listItem}>
                      {info.title}:<span> {info.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cl.border}>
                Border countries:
                {data ? (
                  data.map((b) => (
                    <Link
                      key={b.name.official}
                      className={cl.borderBtn}
                      to={`/country/${b.name.official}`}
                    >
                      <Button withIcon={false}>{b.name.common}</Button>
                    </Link>
                  ))
                ) : (
                  <div>There is no border countries</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
