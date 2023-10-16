import { Currencies } from 'store/types/types.ts';

export const getCurrencies = (currencies: Currencies) => {
  const res: Array<string> = [];

  for (const key in currencies) {
    const { name } = currencies[key];
    res.push(name);
  }

  return res;
};
