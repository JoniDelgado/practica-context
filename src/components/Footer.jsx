import React from 'react';

const Footer = ({ theme, text }) => {
  return (
    <div className={`footer ${theme}`}>
      <h4>{text.footer}</h4>
    </div>
  );
};

export default Footer;
