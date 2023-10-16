export type Country = {
  borders: string[];
  capital: string[];
  continents: string[];
  currencies: Currencies;
  flags: CountryFlags;
  languages: Languages;
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
};

export type CountryName = {
  common: string;
  nativeName: NativeName;
  official: string;
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
  flags: CountryFlags;
  info: InfoType[];
  name: CountryName;
};

export type InfoType = {
  description: number | string | string[];
  title: string;
};
