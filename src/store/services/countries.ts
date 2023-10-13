import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../types/types.ts';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], ''>({
      query: () => `all?fields=name,capital,flags,population,region`,
    }),
    getCountry: builder.query<Country[], string>({
      query: (name) => `name/${name}`,
    }),
    getCountryBorder: builder.query<Country[], string[]>({
      query: (codes) => `alpha?codes=${codes}`,
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryQuery,
  useGetCountryBorderQuery,
} = countriesApi;
