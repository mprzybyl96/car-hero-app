"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState("");

  return (
    <form className="searchBar w-full" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
