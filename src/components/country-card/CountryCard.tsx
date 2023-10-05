import { Country } from '../../store/types/types.ts';
import { FC } from 'react';
import cl from './CountryCard.module.scss';
import { Link } from 'react-router-dom';

type CountryCard = {
  country: Country;
};

export const CountryCard: FC<CountryCard> = ({ country }) => {
  const { name, capital, region, population, flags } = country;

  return (
    <Link to={`/${name.official}`} className={cl.wrapper}>
      <img src={flags.png} alt={flags.alt} className={cl.img} />
      <div className={cl.information}>
        <h3 className={cl.title}>{name.common}</h3>
        <div className={cl.item}>
          <span>Population: </span>
          <span className={cl.common}>{population}</span>
        </div>
        <div className={cl.item}>
          <span>Region: </span>
          <span className={cl.common}>{region}</span>
        </div>
        <div className={cl.item}>
          <span>Capital: </span>
          <span className={cl.common}>{capital}</span>
        </div>
      </div>
    </Link>
  );
};
