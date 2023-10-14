import { CountryInfo } from '../../store/types/types.ts';
import { FC } from 'react';
import cl from './CountryCard.module.scss';
import { Link } from 'react-router-dom';

type CountryCard = {
  countryInfo: CountryInfo;
};

export const CountryCard: FC<CountryCard> = ({ countryInfo }) => {
  const { name, flags, info } = countryInfo;

  return (
    <Link to={`/${name.official}`} className={cl.wrapper}>
      <img src={flags.png} alt={flags.alt} className={cl.img} />
      <div className={cl.information}>
        <h3 className={cl.title}>{name.common}</h3>
        {info.map((i) => (
          <div className={cl.item} key={i.title}>
            <span>{i.title}: </span>
            <span className={cl.common}>{i.description}</span>
          </div>
        ))}
      </div>
    </Link>
  );
};
