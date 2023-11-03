import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header';

import cl from './Layout.module.scss';
import clContainer from '@/shared/ui/container/Container.module.scss';

export const Layout = () => {
  return (
    <div className={cl.layout}>
      <Header />
      <main className={clContainer.container}>
        <Outlet />
      </main>
    </div>
  );
};
