import { useEffect, useState } from 'react';
import cl from './Header.module.scss';
import clContainer from '../../styles/Container.module.scss';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

type Theme = 'light' | 'dark';

export const Header = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
