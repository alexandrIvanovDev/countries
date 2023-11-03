import { useParams } from 'react-router-dom';

import { Loader } from '@/shared/ui/loader';
import { CountryDetails } from '@/widgets/countryDetails';

import { useGetCountryQuery } from '../api/getCountry.ts';

export const CountryPage = () => {
  const params = useParams();

  const { data, isLoading, isFetching } = useGetCountryQuery(params.name as string);

  const country = data && data[0];

  if (!country) return null;

  return (
    <div>
      {(isLoading || isFetching) && <Loader />}
      <CountryDetails country={country} />
    </div>
  );
};
