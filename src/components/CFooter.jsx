import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import ThemeContext from '../context/ThemeContext';

const CFooter = () => {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  return (
    <div className={`footer ${theme}`}>
      <h4>{text.footer}</h4>
    </div>
  );
};

export default CFooter;
