import { TailSpin } from 'react-loader-spinner';

import cl from './Loader.module.scss';

export const Loader = () => {
  return (
    <TailSpin visible wrapperClass={cl.loader} color={'var(--font-color)'} />
  );
};
