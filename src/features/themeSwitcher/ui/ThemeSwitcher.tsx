import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@/shared/lib';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

import { changeTheme } from '../model';

import cl from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
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
    <div onClick={toggleTheme} className={cl.themeSwitcher}>
      {theme === 'light' ? <IoMoonOutline /> : <IoMoonSharp />}
      <div>Dark Mode</div>
    </div>
  );
};
