import { createContext, useState } from 'react';

const LanguageContext = createContext();

const lang = {
  es: {
    title: 'Aplicación con Context API',
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
    title: 'Aplication whit Context API',
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

const LanguageProvider = ({ children }) => {
  const [text, setText] = useState(lang['es']);

  const handleLanguage = (e) => {
    const pageLang = e.target.value;
    console.log(pageLang);
    setText(lang[pageLang]);
  };

  const data = { text, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
