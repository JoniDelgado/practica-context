import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import LogContext from '../context/LogContext';
import ThemeContext from '../context/ThemeContext';

const CHeader = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { log, handleLog } = useContext(LogContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  return (
    <>
      <h1>{text.title}</h1>
      <header className={`header ${theme}`}>
        <div>
          <select name='language' onChange={handleLanguage}>
            <option value='es'>ES</option>
            <option value='en'>EN</option>
          </select>
        </div>
        <div>
          <input
            type='radio'
            id='c-light'
            name='theme'
            value='light'
            onClick={handleTheme}
          />
          <label htmlFor='c-light'>{text.themeLight}</label>
          <input
            type='radio'
            id='c-dark'
            name='theme'
            value='dark'
            onClick={handleTheme}
          />
          <label htmlFor='c-dark'>{text.themeDark}</label>
        </div>
        <div>
          <button onClick={handleLog}>
            {log ? `${text.lin}` : `${text.lout}`}
          </button>
        </div>
      </header>
    </>
  );
};

export default CHeader;
