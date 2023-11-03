import { countriesApi } from '@/shared/api';
import { Country } from '@/shared/types';

export const getAllCountries = countriesApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], null>({
      query: () => `all?fields=name,capital,flags,population,region`,
    }),
  }),
});

export const { useGetAllCountriesQuery } = getAllCountries;
