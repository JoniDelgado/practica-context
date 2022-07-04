import { createContext, useState } from 'react';

const LogContext = createContext();

const LogProvider = ({ children }) => {
  const [log, setLog] = useState(false);

  const handleLog = () => {
    if (log === false) {
      setLog(true);
    } else setLog(false);
  };

  const data = { log, handleLog };
  return <LogContext.Provider value={data}>{children}</LogContext.Provider>;
};

export { LogProvider };
export default LogContext;
