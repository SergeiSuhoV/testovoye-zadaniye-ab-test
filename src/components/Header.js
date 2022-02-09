import "./Header.scss";

import React from "react";

function Header({ title, text, props }) {
  return (
    <header className="header" {...props}>
      <h1 className="header__title">{title}</h1>
      {text && <h2 className="header__text">{text}</h2>}
    </header>
  );
}

export default Header;
