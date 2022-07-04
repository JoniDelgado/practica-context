import React from 'react';

const Main = ({ theme, text, log }) => {
  return (
    <div className={`main ${theme}`}>
      <h3>{log ? text.welcomeGuest : text.welcomeUser}</h3>
      <p>{text.text}</p>
    </div>
  );
};

export default Main;
