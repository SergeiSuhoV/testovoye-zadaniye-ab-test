import "./Search.scss";
import SearchIconSvg from "./SearchIconSvg";
import SearchInput from "./SearchInput";
import SearchItems from "./SearchItems";

import PropTypes from "prop-types";
Search.propTypes = {
  textItems: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
};

function Search({ textItems, onChange, value, placeholder, onFocus }) {
  return (
    <div className="search">
      <div className="search__icon">
        <SearchIconSvg />
      </div>
      <div className="search__input">
        <SearchInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
      <div className="search__items">
        <SearchItems>{textItems}</SearchItems>
      </div>
    </div>
  );
}

export default Search;
