import { Link } from 'react-router-dom';

import { ThemeSwitcher } from '@/features/themeSwitcher';

import cl from './Header.module.scss';
import clContainer from '@/shared/ui/container/Container.module.scss';

export const Header = () => {
  return (
    <div className={cl.header}>
      <div className={clContainer.container}>
        <div className={cl.wrapper}>
          <h1>
            <Link to='/' className={cl.title}>
              Where in the world?
            </Link>
          </h1>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
