import "./Search.scss";

import React from "react";
import SearchIconSvg from "./SearchIconSvg";
import SearchInput from "./SearchInput";
import SearchItems from "./SearchItems";

function Search() {
  return (
    <div className="search">
      <div className="search__icon">
        <SearchIconSvg />
      </div>
      <div className="search__input">
        <SearchInput placeholder="What test are you looking for?"></SearchInput>
      </div>
      <div className="search__items">
        <SearchItems>7 tests</SearchItems>
      </div>
    </div>
  );
}

export default Search;
