import { Link, useNavigate, useParams } from 'react-router-dom';
import cl from './CountryPage.module.scss';
import {
  useGetCountryBorderQuery,
  useGetCountryQuery,
} from '../../store/services/countries.ts';
import { Loader } from '../../components/loader/Loader.tsx';
import { Button } from '../../components/button/Button.tsx';

export const CountryPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading } = useGetCountryQuery(params.name as string);

  const country = data && data[0];

  let borders: Array<string> = [];

  if (country && country.borders?.length) {
    borders = country.borders.map((b) => b);
  }

  const { data: borderData, isLoading: borderCountryLoading } =
    useGetCountryBorderQuery(borders);

  return (
    <div>
      {isLoading && <Loader />}
      {borderCountryLoading && <Loader />}
      {/*{error && (*/}
      {/*  <h3 style={{ textAlign: 'center', margin: '3rem' }}>*/}
      {/*    {error.data.message}*/}
      {/*  </h3>*/}
      {/*)}*/}
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
              <h2 className={cl.title}>{country.name.common}</h2>
              <div>Exact information</div>
              {borderData && borderData.length && (
                <div className={cl.border}>
                  Border countries:
                  {borderData.map((b) => (
                    <Link
                      to={`/${b.name.official}`}
                      className={cl.borderBtn}
                      key={b.name.official}
                    >
                      <Button withIcon={false}>{b.name.common}</Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
