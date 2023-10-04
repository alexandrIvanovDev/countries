import { Country } from '../../store/types/types.ts';
import { FC } from 'react';
import cl from './CountryCard.module.scss';

type CountryCard = {
  country: Country;
};

export const CountryCard: FC<CountryCard> = ({ country }) => {
  const { name, capital, region, population, flags } = country;

  return (
    <div className={cl.wrapper}>
      <div className={cl.imgWrapper}></div>
      <img src={flags.png} alt={flags.alt} className={cl.img} />
      <div className={cl.information}>
        <h3 className={cl.title}>{name.official}</h3>
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
    </div>
  );
};
