import { Outlet } from 'react-router-dom';
import cl from './Layout.module.scss';
import clContainer from '../../styles/Container.module.scss';
import { Header } from 'src/components/header';

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
