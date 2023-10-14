import { Button } from '../button/Button.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import cl from './CountryDetails.module.scss';
import { useGetCountryBorderQuery } from '../../store/services/countries.ts';
import { Loader } from '../loader/Loader.tsx';
import { Country, InfoType } from '../../store/types/types.ts';
import { getCurrencies } from '../../utils/getCurrencies.ts';
import { getLanguages } from '../../utils/getLanguages.ts';
import { getNativeName } from '../../utils/getNativeName.ts';

type Props = {
  country: Country;
  // borderData: any;
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
    { title: 'Top Level Domain', description: country.tld.join(', ') },
    { title: 'Currencies', description: currencies.join(', ') },
    { title: 'Languages', description: languages.join(', ') },
  ];

  return (
    <div>
      {/*{error && (*/}
      {/*  <h3 style={{ textAlign: 'center', margin: '3rem' }}>*/}
      {/*    {error.data.message}*/}
      {/*  </h3>*/}
      {/*)}*/}
      {isLoading && <Loader />}
      {country && (
        <div className={cl.wrapper}>
          <div className={cl.btnBack}>
            <Button withIcon={true} onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
          <div className={cl.country}>
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className={cl.flag}
            />
            <div className={cl.countryInformation}>
              <h2 className={cl.title}>{country.name.official}</h2>
              <div className={cl.lists}>
                <ul className={cl.list}>
                  {info.map((info) => (
                    <li className={cl.listItem} key={info.title}>
                      {info.title}:<span> {info.description}</span>
                    </li>
                  ))}
                </ul>
                <ul className={cl.list}>
                  {extraInfo.map((info) => (
                    <li className={cl.listItem} key={info.title}>
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
                      to={`/country/${b.name.official}`}
                      className={cl.borderBtn}
                      key={b.name.official}
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
