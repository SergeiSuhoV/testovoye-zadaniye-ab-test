import "./SearchItems.scss";
import React from "react";

import PropTypes from "prop-types";
SearchItems.propTypes = {
  children: PropTypes.node,
};

function SearchItems({ children }) {
  return <div>{children}</div>;
}

export default SearchItems;
