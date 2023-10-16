import { Languages } from 'store/types/types.ts';

export const getLanguages = (languages: Languages) => {
  const res: Array<string> = [];

  for (const key in languages) {
    res.push(languages[key]);
  }

  return res;
};
