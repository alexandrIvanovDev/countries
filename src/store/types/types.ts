export type Country = {
  name: {
    common: string;
    official: string;
  };
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
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};
