import React from "react";
import "./SearchInput.scss";

import PropTypes from "prop-types";
SearchInput.propTypes = {
  props: PropTypes.node,
};

function SearchInput(props) {
  return <input className="search-input" {...props} />;
}

export default SearchInput;
