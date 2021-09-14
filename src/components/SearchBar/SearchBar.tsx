import React, { ChangeEvent, useState } from "react";

import "./SearchBar.scss";

interface Props {
  onSearch: (value: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const submitHandler = (ev: any) => {
    ev.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
    console.log("Submitting");
  };

  return (
    <div className="search-container">
      <form onSubmit={submitHandler}>
        <input
          className="searchbar"
          placeholder="Search..."
          type="input"
          value={searchValue}
          onChange={searchHandler}
        />
        <button type="submit">Get weather info</button>
      </form>
    </div>
  );
};

export default SearchBar;
