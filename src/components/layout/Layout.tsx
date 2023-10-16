import { Outlet } from 'react-router-dom';

import { Header } from 'components/header';

import cl from './Layout.module.scss';
import clContainer from 'styles/Container.module.scss';

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
