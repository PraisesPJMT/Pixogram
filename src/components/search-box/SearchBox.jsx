import { BiSearch } from "react-icons/bi";
import { useAuth } from "../../store/auth";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import "./SearchBox.scss";

const SearchBox = () => {
  const [search, setSearch] = useSearchParams();
  const [focus, setFocus] = useState(false);
  const theme = useAuth((state) => state.theme);

  const searchTerm = search.get("search") || "";

  const handleSearch = (event) => {
    const query = event.target.value;

    if (query) {
      setSearch({ search: query });
    } else {
      setSearch({});
    }
  };

  return (
    <label
      className={`search-box ${theme.toLowerCase()} ${focus ? "active" : ""}`}
    >
      <BiSearch />
      <input
        type="text"
        placeholder="Search photo"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </label>
  );
};

export default SearchBox;
