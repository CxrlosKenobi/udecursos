import { useState } from 'react';
import { MoonIcon, SunIcon } from './ThemeIcons';
//
import "./ThemeToggle.scss";

export default function ThemeToggle(props) {
  const [theme, setTheme] = useState('light');

  function onClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="theme-toggle">
      <button onClick={onClick}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
};
