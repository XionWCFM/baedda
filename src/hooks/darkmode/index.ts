'use client';
import { useTheme } from 'next-themes';

export const useDarkmode = () => {
  const { setTheme, theme, themes } = useTheme();
  const setToggleTheme = (str?: 'light' | 'dark' | 'system') => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(str ?? changeTheme);
  };
  return [themes, setToggleTheme] as const;
};
