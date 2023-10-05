import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Country } from '../types/types.ts';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<Country[], ''>({
      query: () => `all`,
    }),
    getCountry: builder.query<Country[], string>({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryQuery } = countriesApi;
