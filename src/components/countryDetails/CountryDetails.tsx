import { Button } from '../button/Button.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import cl from './CountryDetails.module.scss';
import { useGetCountryBorderQuery } from '../../store/services/countries.ts';
import { Loader } from '../loader/Loader.tsx';
import { Country } from '../../store/types/types.ts';
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

  // if (country.borders?.length) {
  //   borders = country.borders.map((b) => b);
  // }

  const { data, isLoading } = useGetCountryBorderQuery(borders);

  useEffect(() => {
    setCurrencies(getCurrencies(country.currencies));
    setLanguages(getLanguages(country.languages));
    setNativeName(getNativeName(country.name.nativeName));
  }, []);

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
                  <li className={cl.listItem}>
                    Native Name:
                    <span> {nativeName.join(', ')}</span>
                  </li>
                  <li className={cl.listItem}>
                    Population:
                    <span> {country.population.toLocaleString()}</span>
                  </li>
                  <li className={cl.listItem}>
                    Region:
                    <span> {country.region}</span>
                  </li>
                  <li className={cl.listItem}>
                    Subregion:
                    <span> {country.subregion}</span>
                  </li>
                  <li className={cl.listItem}>
                    Capital:
                    <span> {country.capital}</span>
                  </li>
                </ul>
                <ul className={cl.list}>
                  <li className={cl.listItem}>
                    Top Level Domain:
                    <span> {country.tld.join(', ')}</span>
                  </li>
                  <li className={cl.listItem}>
                    Currencies:
                    <span> {currencies.join(', ')}</span>
                  </li>
                  <li className={cl.listItem}>
                    Languages:
                    <span> {languages.join(', ')}</span>
                  </li>
                </ul>
              </div>
              <div className={cl.border}>
                Border countries:
                {data ? (
                  data.map((b) => (
                    <Link
                      to={`/${b.name.official}`}
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
