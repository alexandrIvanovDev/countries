export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      // lang: {
      //   official: string;
      //   common: string;
      // };
      // fra: {
      //   official: string;
      //   common: string;
      // };
      // nld: {
      //   official: string;
      //   common: string;
      // };
    };
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
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};
