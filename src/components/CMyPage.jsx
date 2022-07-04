import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import { LogProvider } from '../context/LogContext';
import { ThemeProvider } from '../context/ThemeContext';
import CFooter from './CFooter';
import CHeader from './CHeader';
import CMain from './CMain';

const CMyPage = () => {
  return (
    <section className={`app-wrapper`}>
      <LanguageProvider>
        <ThemeProvider>
          <LogProvider>
            <CHeader />
            <CMain />
            <CFooter />
          </LogProvider>
        </ThemeProvider>
      </LanguageProvider>
    </section>
  );
};

export default CMyPage;
