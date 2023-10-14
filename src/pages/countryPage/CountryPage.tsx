import { useParams } from 'react-router-dom';
import { useGetCountryQuery } from '../../store/services/countries.ts';
import { Loader } from 'src/components/loader';
import { CountryDetails } from 'src/components/countryDetails';

export const CountryPage = () => {
  const params = useParams();

  const { data, isLoading } = useGetCountryQuery(params.name as string);

  const country = data && data[0];

  if (!country) return null;

  return (
    <div>
      {isLoading && <Loader />}
      <CountryDetails country={country} />
    </div>
  );
};
