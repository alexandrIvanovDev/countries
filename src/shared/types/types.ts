export type Country = {
  tld: string[];
  region: string;
  borders: string[];
  capital: string[];
  name: CountryName;
  subregion: string;
  population: number;
  flags: CountryFlags;
  continents: string[];
  languages: Languages;
  currencies: Currencies;
};

export type CountryName = {
  common: string;
  official: string;
  nativeName: NativeName;
};

export type NativeName = {
  [country: string]: {
    common: string;
    official: string;
  };
};

export type Currencies = {
  [country: string]: {
    name: string;
    symbol: string;
  };
};

export type CountryFlags = {
  alt: string;
  png: string;
  svg: string;
};

export type Languages = {
  [country: string]: string;
};

export type CountryInfo = {
  info: InfoType[];
  name: CountryName;
  flags: CountryFlags;
};

export type InfoType = {
  title: string;
  description: number | string | string[];
};

export type Option = {
  label: string;
  value: string;
};
