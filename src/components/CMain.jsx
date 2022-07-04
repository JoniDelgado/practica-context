import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import LogContext from '../context/LogContext';
import LanguageContext from '../context/LanguageContext';

const CMain = () => {
  const { theme } = useContext(ThemeContext);
  const { log } = useContext(LogContext);
  const { text } = useContext(LanguageContext);

  return (
    <div className={`main ${theme}`}>
      <h3>{log ? text.welcomeGuest : text.welcomeUser}</h3>
      <p>{text.text}</p>
    </div>
  );
};

export default CMain;
