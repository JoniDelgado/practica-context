import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const InitialTheme = 'light';

const lang = {
  es: {
    title: 'Aplicación sin Context API',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    welcomeGuest: 'Bienvenido Invitado',
    welcomeUser: 'Bienvenido Usuario',
    lin: 'Registrarse',
    lout: 'Cerrar Sesión',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo cumque similique laborum culpa enim quam iste, aspernatur accusantium dolore veritatis natus quisquam fuga quasi praesentium sunt quod delectus voluptatibus harum perferendis. Ea hic alias atque, minus voluptatem non aperiam rerum, quo ducimus, animi doloremque consectetur perspiciatis laudantium. Optio, repellendus.',
    footer: 'Esta página fue construida con amor por Jonatan',
  },
  en: {
    title: 'Aplication whitout Context API',
    themeLight: 'Light',
    themeDark: 'Dark',
    welcomeGuest: 'Welcome Guest',
    welcomeUser: 'Welcome User',
    lin: 'LogIn',
    lout: 'LogOut',
    text: 'ipsam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur debitis esse, minima placeat nulla quod doloribus sequi est qui in! neque facilis iste accusamus eum omnis harum molestias iure minus. Repellendus vero sequi quod recusandae ex cum architecto?',
    footer: 'This page was made whit love by Joanatan',
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(InitialTheme);
  const [text, setText] = useState(lang['es']);
  const [log, setLog] = useState(false);

  const handleTheme = (e) => {
    const themeColor = e.target.value;
    setTheme(themeColor);
  };

  const handleLanguage = (e) => {
    const pageLang = e.target.value;
    console.log(pageLang);
    setText(lang[pageLang]);
  };

  const handleLog = () => {
    if (log === false) {
      setLog(true);
    } else setLog(false);
  };

  return (
    <>
      <section className={`app-wrapper`}>
        <h1>{text.title}</h1>
        <Header
          handleTheme={handleTheme}
          theme={theme}
          handleLanguage={handleLanguage}
          text={text}
          handleLog={handleLog}
          log={log}
        />
        <Main theme={theme} text={text} log={log} />
        <Footer theme={theme} text={text} />
      </section>
    </>
  );
};

export default MyPage;
