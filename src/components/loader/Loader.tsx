import { TailSpin } from 'react-loader-spinner';
import cl from './Loader.module.scss';

export const Loader = () => {
  return (
    <TailSpin
      color={'var(--font-color)'}
      visible={true}
      wrapperClass={cl.wrapper}
    />
  );
};
