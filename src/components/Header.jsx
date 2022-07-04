import React from 'react';

const Header = ({
  theme,
  handleTheme,
  handleLanguage,
  text,
  handleLog,
  log,
}) => {
  return (
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
          id='light'
          name='theme'
          value='light'
          onClick={handleTheme}
        />
        <label htmlFor='light'>{text.themeLight}</label>
        <input
          type='radio'
          id='dark'
          name='theme'
          value='dark'
          onClick={handleTheme}
        />
        <label htmlFor='dark'>{text.themeDark}</label>
      </div>
      <div>
        <button onClick={handleLog}>
          {log ? `${text.lin}` : `${text.lout}`}
        </button>
      </div>
    </header>
  );
};

export default Header;
