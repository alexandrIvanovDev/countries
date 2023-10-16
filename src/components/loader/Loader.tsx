import { TailSpin } from 'react-loader-spinner';

import cl from './Loader.module.scss';

export const Loader = () => {
  return (
    <TailSpin visible wrapperClass={cl.wrapper} color={'var(--font-color)'} />
  );
};
