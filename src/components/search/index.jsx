import React from "react";
import "./style.css";

export const SearchBox = (probs) => (
  <input
    type="search"
    className="search-box"
    placeholder="хайх"
    onChange={probs.onSearch}
  />
);
