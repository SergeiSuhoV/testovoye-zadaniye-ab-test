import "./Header.scss";
import React from "react";

import PropTypes from 'prop-types';
Header.propTypes = {
  tittle: PropTypes.string,
  text: PropTypes.string,
}

function Header({ title, text}) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      {text && <h2 className="header__text">{text}</h2>}
    </header>
  );
}

export default Header;
