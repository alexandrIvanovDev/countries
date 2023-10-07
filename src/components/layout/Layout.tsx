import { Header } from '../header/Header.tsx';
import { Outlet } from 'react-router-dom';
import cl from './Layout.module.scss';
import clContainer from '../header/Container.module.scss';

export const Layout = () => {
  return (
    <div className={cl.layout}>
      <Header />
      <div className={clContainer.container}>
        <Outlet />
      </div>
    </div>
  );
};
