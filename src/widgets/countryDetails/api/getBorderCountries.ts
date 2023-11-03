import { countriesApi } from '@/shared/api';
import { Country } from '@/shared/types';

const getBorderCountries = countriesApi.injectEndpoints({
  endpoints: (builder) => ({
    getBorderCountries: builder.query<Country[], string[]>({
      query: (codes) => `alpha?codes=${codes}`,
    }),
  }),
});

export const { useGetBorderCountriesQuery } = getBorderCountries;
