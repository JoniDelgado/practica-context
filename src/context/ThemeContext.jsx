import { createContext, useState } from 'react';

const ThemeContext = createContext();

const InitialTheme = 'light';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(InitialTheme);

  const handleTheme = (e) => {
    const themeColor = e.target.value;
    setTheme(themeColor);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
