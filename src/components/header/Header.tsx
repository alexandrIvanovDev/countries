import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';
import { changeTheme } from 'store/services/theme.ts';
import { useAppSelector } from 'store/store.ts';

import cl from './Header.module.scss';
import clContainer from 'styles/Container.module.scss';

export const Header = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={cl.header}>
      <div className={clContainer.container}>
        <div className={cl.wrapper}>
          <h1>
            <Link to='/' className={cl.title}>
              Where in the world?
            </Link>
          </h1>
          <div onClick={toggleTheme} className={cl.themeSwitcher}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoonSharp />}
            <div>Dark Mode</div>
          </div>
        </div>
      </div>
    </div>
  );
};
