import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CountryInfo } from '@/shared/types';

import cl from './CountryCard.module.scss';

type CountryCard = {
  countryInfo: CountryInfo;
};

export const CountryCard: FC<CountryCard> = ({ countryInfo }) => {
  const { name, flags, info } = countryInfo;

  return (
    <Link className={cl.wrapper} to={`/country/${name.official}`}>
      <img alt={flags.alt} src={flags.png} className={cl.img} />
      <div className={cl.information}>
        <h3 className={cl.title}>{name.common}</h3>
        {info.map((i) => (
          <div key={i.title} className={cl.item}>
            <span>{i.title}: </span>
            <span className={cl.common}>{i.description}</span>
          </div>
        ))}
      </div>
    </Link>
  );
};
