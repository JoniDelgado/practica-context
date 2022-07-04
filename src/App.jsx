import React from 'react';
import MyPage from './components/MyPage';
import CMyPage from './components/CMyPage';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <section style={{ display: 'flex' }}>
      <MyPage />
      <CMyPage />
    </section>
  );
}

export default App;
