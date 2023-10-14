export type Country = {
  name: CountryName;
  tld: string[];
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  borders: string[];
  population: number;
  continents: string[];
  flags: CountryFlags;
  languages: Languages;
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
  png: string;
  svg: string;
  alt: string;
};

export type Languages = {
  [country: string]: string;
};

export type CountryInfo = {
  name: CountryName;
  flags: CountryFlags;
  info: InfoType[];
};

export type InfoType = {
  title: string;
  description: string | number | string[];
};
