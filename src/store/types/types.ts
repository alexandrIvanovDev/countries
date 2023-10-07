export type Country = {
  name: CountryName;
  tld: ['.be'];
  currencies: {
    EUR: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    deu: 'German';
    fra: 'French';
    nld: 'Dutch';
  };
  borders: string[];
  area: number;
  population: number;
  continents: string[];
  flags: CountryFlags;
};

export type CountryName = {
  common: string;
  official: string;
};

export type CountryFlags = {
  png: string;
  svg: string;
  alt: string;
};

export type CountryInfo = {
  name: CountryName;
  flags: CountryFlags;
  info: InfoType[];
};

type InfoType = {
  title: string;
  description: string | number | string[];
};
