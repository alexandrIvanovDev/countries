import { NativeName } from '@/shared/types';

export const getNativeName = (name: NativeName) => {
  const res: Array<string> = [];

  for (const key in name) {
    const { official } = name[key];
    res.push(official);
  }

  return res;
};
