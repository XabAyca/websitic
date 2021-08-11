import React, { useContext } from 'react';
import DarkMode from './DarkMode';

const ThemeBtn = () => {
  const {darkMode,toogleMode} = useContext(DarkMode)
  return (
    <span className={darkMode?"theme-btn dark":"theme-btn"} onClick={toogleMode}> Mode&nbsp;
          {darkMode ?<i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </span>
  );
};

export default ThemeBtn;