import { countriesApi } from '@/shared/api';
import { Country } from '@/shared/types';

const getCountry = countriesApi.injectEndpoints({
  endpoints: (builder) => ({
    getCountry: builder.query<Country[], string>({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const { useGetCountryQuery } = getCountry;
