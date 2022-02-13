import "./Button.scss";
import React from "react";

import PropTypes from "prop-types";
Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  selectStatusButton: PropTypes.string,
};

function Button({ children, onClick, selectStatusButton }) {
  return (
    <button
      className={`button ${
        selectStatusButton && "button_" + selectStatusButton
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
